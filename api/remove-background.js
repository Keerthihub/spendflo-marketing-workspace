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

async function removeBackground(input) {
  // Free background removal using rembg open-source library
  // pip install rembg pillow
  const { exec } = require("child_process");
  const fs = require("fs/promises");
  const path = require("path");
  const crypto = require("crypto");

  // Create temp files
  const tmpDir = "/tmp";
  const fileId = crypto.randomBytes(8).toString("hex");
  const inputPath = path.join(tmpDir, `rembg-in-${fileId}`);
  const outputPath = path.join(tmpDir, `rembg-out-${fileId}.png`);

  try {
    // Write input to temp file
    await fs.writeFile(inputPath, input.bytes);

    // Run rembg (free, open-source)
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error("Background removal timed out."));
      }, 55000);

      exec(`rembg i "${inputPath}" "${outputPath}"`, (error, stdout, stderr) => {
        clearTimeout(timeout);
        if (error) {
          reject(new Error(
            error.code === 127
              ? "rembg not installed. Install with: pip install rembg"
              : "Background removal failed: " + (stderr || error.message)
          ));
        } else {
          resolve();
        }
      });
    });

    // Read result
    const output = await fs.readFile(outputPath);

    // Cleanup
    await Promise.all([
      fs.unlink(inputPath).catch(() => {}),
      fs.unlink(outputPath).catch(() => {})
    ]);

    return output;
  } catch (error) {
    // Cleanup on error
    await Promise.all([
      fs.unlink(inputPath).catch(() => {}),
      fs.unlink(outputPath).catch(() => {})
    ]);
    throw error;
  }
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return json(res, 405, { error: "Method not allowed." });
  try {
    const input = await getInput(req);
    if (!input.bytes.length) return json(res, 400, { error: "The image is empty." });

    const output = await removeBackground(input);
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
