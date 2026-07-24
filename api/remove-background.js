const MAX_BYTES = 20 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp"]);

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BYTES) throw Object.assign(new Error("Image exceeds 20MB."), { status: 413 });
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

function safeRemoteUrl(value) {
  const url = new URL(value);
  if (url.protocol !== "https:") throw new Error("Only HTTPS image URLs are accepted.");
  const host = url.hostname.toLowerCase();
  if (
    host === "localhost" || host === "0.0.0.0" || host === "::1" ||
    /^127\./.test(host) || /^10\./.test(host) || /^192\.168\./.test(host) ||
    /^169\.254\./.test(host) || /^172\.(1[6-9]|2\d|3[01])\./.test(host) ||
    host.endsWith(".local")
  ) throw new Error("Private network URLs are not accepted.");
  return url;
}

async function fetchRemote(value) {
  let url = safeRemoteUrl(value);
  for (let redirects = 0; redirects < 4; redirects += 1) {
    const response = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(15000) });
    if (response.status < 300 || response.status >= 400) return response;
    const location = response.headers.get("location");
    if (!location) throw new Error("The image URL returned an invalid redirect.");
    url = safeRemoteUrl(new URL(location, url).toString());
  }
  throw new Error("The image URL redirected too many times.");
}

async function getInput(req) {
  const type = (req.headers["content-type"] || "").split(";")[0].toLowerCase();
  if (type === "application/json") {
    const data = JSON.parse((await readBody(req)).toString("utf8"));
    const url = safeRemoteUrl(data.imageUrl || "");
    const upstream = await fetchRemote(url);
    if (!upstream.ok) throw new Error("The image URL could not be downloaded.");
    const remoteType = (upstream.headers.get("content-type") || "").split(";")[0];
    if (!ALLOWED.has(remoteType)) throw new Error("The URL must point to a JPG, PNG, or WEBP image.");
    if (Number(upstream.headers.get("content-length") || 0) > MAX_BYTES) {
      throw Object.assign(new Error("Image exceeds 20MB."), { status: 413 });
    }
    const bytes = Buffer.from(await upstream.arrayBuffer());
    if (bytes.length > MAX_BYTES) throw Object.assign(new Error("Image exceeds 20MB."), { status: 413 });
    return { bytes, type: remoteType, name: "remote-image" };
  }
  if (!ALLOWED.has(type)) throw new Error("Upload a JPG, PNG, or WEBP image.");
  return {
    bytes: await readBody(req),
    type,
    name: String(req.headers["x-file-name"] || "upload").slice(0, 120)
  };
}

async function removeBg(input) {
  const key = process.env.REMOVE_BG_API_KEY;
  if (!key) throw Object.assign(new Error("REMOVE_BG_API_KEY is not configured."), { status: 503 });
  const body = new FormData();
  body.append("image_file", new Blob([input.bytes], { type: input.type }), input.name);
  body.append("size", "auto");
  body.append("format", "png");
  return fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: { "X-Api-Key": key },
    body,
    signal: AbortSignal.timeout(55000)
  });
}

async function clipdrop(input) {
  const key = process.env.CLIPDROP_API_KEY;
  if (!key) throw Object.assign(new Error("CLIPDROP_API_KEY is not configured."), { status: 503 });
  const body = new FormData();
  body.append("image_file", new Blob([input.bytes], { type: input.type }), input.name);
  return fetch("https://clipdrop-api.co/remove-background/v1", {
    method: "POST",
    headers: { "x-api-key": key },
    body,
    signal: AbortSignal.timeout(55000)
  });
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return json(res, 405, { error: "Method not allowed." });
  try {
    const input = await getInput(req);
    if (!input.bytes.length) return json(res, 400, { error: "The image is empty." });
    const provider = (process.env.BACKGROUND_PROVIDER || "removebg").toLowerCase();
    const response = provider === "clipdrop" ? await clipdrop(input) : await removeBg(input);
    if (!response.ok) {
      const detail = (await response.text()).slice(0, 500);
      console.error("Background provider error", response.status, detail);
      return json(res, response.status >= 500 ? 502 : response.status, {
        error: response.status === 429 ? "The background service is busy. Try again shortly." : "Background removal failed."
      });
    }
    const output = Buffer.from(await response.arrayBuffer());
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Length", output.length);
    res.end(output);
  } catch (error) {
    console.error("remove-background", error);
    json(res, error.status || 400, { error: error.message || "Unable to process this image." });
  }
};

module.exports.config = { api: { bodyParser: false } };
