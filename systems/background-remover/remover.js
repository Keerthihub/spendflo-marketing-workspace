(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var fileInput = $("#file"), upload = $("#uploadPanel"), process = $("#processPanel"), editor = $("#editor");
  var error = $("#error"), canvas = $("#canvas"), ctx = canvas.getContext("2d");
  var original, result, filename = "image", progressTimer;
  var state = { scale: 1, rotate: 0, feather: 0, bg: "transparent", compare: 50, view: "compare" };
  var history = [], future = [];

  function showError(message) { error.textContent = message; error.hidden = false; }
  function clearError() { error.hidden = true; error.textContent = ""; }
  function setStage(name) {
    upload.hidden = name !== "upload"; process.hidden = name !== "process"; editor.hidden = name !== "editor";
  }
  function valid(file) {
    if (!file || !/image\/(jpeg|png|webp)/.test(file.type)) return "Choose a JPG, PNG, or WEBP image.";
    if (file.size > 20 * 1024 * 1024) return "That image is larger than 20MB.";
    return "";
  }
  function imageFrom(blob) {
    return new Promise(function (resolve, reject) {
      var img = new Image(), url = URL.createObjectURL(blob);
      img.onload = function () { URL.revokeObjectURL(url); resolve(img); };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error("The image could not be read.")); };
      img.src = url;
    });
  }
  function imageFromUrl(url) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { reject(new Error("The original image URL could not be displayed.")); };
      img.src = url;
    });
  }
  function rememberRecent(name) {
    try {
      var rows = JSON.parse(localStorage.getItem("br-recent") || "[]");
      rows.unshift({ name: name, at: Date.now() });
      localStorage.setItem("br-recent", JSON.stringify(rows.slice(0, 5)));
    } catch (_) {}
  }
  function animateProgress() {
    var value = 8, bar = $("#progress"), text = $("#progressText");
    bar.style.width = value + "%";
    progressTimer = setInterval(function () {
      value = Math.min(92, value + Math.max(1, (94 - value) * .08));
      bar.style.width = value + "%";
      text.textContent = value < 45 ? "Finding the subject…" : value < 78 ? "Refining fine edges…" : "Preserving transparency…";
    }, 280);
  }
  async function submitFile(file) {
    var problem = valid(file);
    if (problem) return showError(problem);
    clearError(); filename = (file.name || "image").replace(/\.[^.]+$/, "");
    try {
      original = await imageFrom(file);
      if (original.naturalWidth < 1 || original.naturalHeight < 1) throw new Error("The image has invalid dimensions.");
      setStage("process"); animateProgress();
      var response = await fetch("/api/remove-background", {
        method: "POST",
        headers: { "Content-Type": file.type, "X-File-Name": encodeURIComponent(file.name || "upload") },
        body: file
      });
      if (!response.ok) {
        var body = await response.json().catch(function () { return {}; });
        throw new Error(body.error || "Background removal failed. Try again.");
      }
      result = await imageFrom(await response.blob());
      clearInterval(progressTimer); $("#progress").style.width = "100%";
      rememberRecent(file.name || "Pasted image");
      resetState(false); setStage("editor"); resizeCanvas(); render();
    } catch (e) {
      clearInterval(progressTimer); setStage("upload"); showError(e.message);
    }
  }
  async function submitUrl(url) {
    clearError(); filename = "background-removed";
    try {
      original = await imageFromUrl(url);
      setStage("process"); animateProgress();
      var response = await fetch("/api/remove-background", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ imageUrl: url })
      });
      if (!response.ok) {
        var body = await response.json().catch(function () { return {}; });
        throw new Error(body.error || "That URL could not be processed.");
      }
      var output = await response.blob();
      result = await imageFrom(output);
      clearInterval(progressTimer); resetState(false); setStage("editor"); resizeCanvas(); render();
    } catch (e) { clearInterval(progressTimer); setStage("upload"); showError(e.message); }
  }
  function resizeCanvas() {
    var box = $("#canvasWrap").getBoundingClientRect(), ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(box.width * ratio); canvas.height = Math.round(box.height * ratio);
  }
  function drawBackground(target, w, h, bg) {
    if (bg === "transparent") return;
    if (bg === "gradient") {
      var g = target.createLinearGradient(0, 0, w, h); g.addColorStop(0, "#f34db2"); g.addColorStop(1, "#390021");
      target.fillStyle = g;
    } else target.fillStyle = bg;
    target.fillRect(0, 0, w, h);
  }
  function drawImage(target, img, w, h, s) {
    var fit = Math.min(w / img.naturalWidth, h / img.naturalHeight) * .9 * s.scale;
    var iw = img.naturalWidth * fit, ih = img.naturalHeight * fit;
    target.save(); target.translate(w / 2, h / 2); target.rotate(s.rotate * Math.PI / 180);
    target.filter = s.feather ? "blur(" + s.feather + "px)" : "none";
    target.drawImage(img, -iw / 2, -ih / 2, iw, ih); target.restore(); target.filter = "none";
  }
  function render() {
    if (!original || !result) return;
    var w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h); drawBackground(ctx, w, h, state.bg);
    if (state.view === "after") drawImage(ctx, result, w, h, state);
    else {
      drawImage(ctx, result, w, h, state);
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, w * state.compare / 100, h); ctx.clip();
      ctx.clearRect(0, 0, w * state.compare / 100, h); drawImage(ctx, original, w, h, state); ctx.restore();
      ctx.fillStyle = "#fff"; ctx.shadowColor = "rgba(0,0,0,.25)"; ctx.shadowBlur = 6;
      ctx.fillRect(w * state.compare / 100 - 1, 0, 2, h); ctx.shadowBlur = 0;
    }
  }
  function snapshot() {
    history.push(JSON.stringify(state)); if (history.length > 30) history.shift(); future = []; updateHistory();
  }
  function applyState(raw) {
    state = JSON.parse(raw); $("#scale").value = state.scale * 100; $("#rotate").value = state.rotate;
    $("#feather").value = state.feather; $("#compare").value = state.compare;
    document.querySelectorAll("[data-bg]").forEach(function (b) { b.classList.toggle("on", b.dataset.bg === state.bg); });
    outputs(); render(); updateHistory();
  }
  function updateHistory() { $("#undo").disabled = !history.length; $("#redo").disabled = !future.length; }
  function outputs() {
    $("#scale").nextElementSibling.value = Math.round(state.scale * 100) + "%";
    $("#rotate").nextElementSibling.value = state.rotate + "°";
    $("#feather").nextElementSibling.value = state.feather + "px";
  }
  function resetState(track) {
    if (track) snapshot();
    state = { scale: 1, rotate: 0, feather: 0, bg: "transparent", compare: 50, view: "compare" };
    history = track ? history : []; future = []; outputs(); updateHistory();
  }
  function exportImage() {
    var setting = $("#exportSize").value, max = Math.max(result.naturalWidth, result.naturalHeight);
    var factor = setting === "1" ? 1 : setting === "2" ? 2 : Number(setting) / max;
    factor = Math.min(factor, 4);
    var out = document.createElement("canvas"), oc = out.getContext("2d");
    out.width = Math.max(1, Math.round(result.naturalWidth * factor)); out.height = Math.max(1, Math.round(result.naturalHeight * factor));
    var exportState = Object.assign({}, state, { scale: state.scale / .9 });
    drawBackground(oc, out.width, out.height, state.bg); drawImage(oc, result, out.width, out.height, exportState);
    var format = $("#exportFormat").value, mime = "image/" + format;
    if (format === "jpeg" && state.bg === "transparent") {
      var temp = document.createElement("canvas"), tc = temp.getContext("2d"); temp.width = out.width; temp.height = out.height;
      tc.fillStyle = "#fff"; tc.fillRect(0, 0, temp.width, temp.height); tc.drawImage(out, 0, 0); out = temp;
    }
    out.toBlob(function (blob) {
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename + "-no-bg." + format; a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    }, mime, .95);
  }

  document.querySelectorAll("[data-pick]").forEach(function (b) { b.onclick = function () { fileInput.click(); }; });
  fileInput.onchange = function () { if (fileInput.files[0]) submitFile(fileInput.files[0]); };
  ["dragenter", "dragover"].forEach(function (name) { upload.addEventListener(name, function (e) { e.preventDefault(); upload.classList.add("drag"); }); });
  ["dragleave", "drop"].forEach(function (name) { upload.addEventListener(name, function (e) { e.preventDefault(); upload.classList.remove("drag"); }); });
  upload.addEventListener("drop", function (e) { if (e.dataTransfer.files[0]) submitFile(e.dataTransfer.files[0]); });
  $("#pasteBtn").onclick = async function () {
    try {
      var items = await navigator.clipboard.read(), blob;
      items.some(function (item) { var type = item.types.find(function (t) { return /^image\/(png|jpeg|webp)$/.test(t); }); if (type) { blob = item.getType(type); return true; } });
      if (!blob) throw new Error("No supported image was found on your clipboard.");
      var resolved = await blob; submitFile(new File([resolved], "pasted-image." + resolved.type.split("/")[1], { type: resolved.type }));
    } catch (e) { showError(e.message || "Clipboard access was not available."); }
  };
  $("#urlBtn").onclick = function () { $("#urlForm").hidden = !$("#urlForm").hidden; if (!$("#urlForm").hidden) $("#urlInput").focus(); };
  $("#urlForm").onsubmit = function (e) { e.preventDefault(); submitUrl($("#urlInput").value); };
  ["scale", "rotate", "feather"].forEach(function (id) {
    var el = $("#" + id); el.onpointerdown = snapshot; el.oninput = function () {
      state[id] = id === "scale" ? Number(el.value) / 100 : Number(el.value); outputs(); render();
    };
  });
  $("#compare").oninput = function () { state.compare = Number(this.value); render(); };
  document.querySelectorAll("[data-view]").forEach(function (b) { b.onclick = function () {
    state.view = b.dataset.view; document.querySelectorAll("[data-view]").forEach(function (x) { x.classList.toggle("on", x === b); });
    $("#compare").hidden = state.view === "after"; render();
  }; });
  document.querySelectorAll("[data-bg]").forEach(function (b) { b.onclick = function () {
    snapshot(); state.bg = b.dataset.bg; document.querySelectorAll("[data-bg]").forEach(function (x) { x.classList.toggle("on", x === b); }); render();
  }; });
  $("#color").oninput = function () { state.bg = this.value; document.querySelectorAll("[data-bg]").forEach(function (x) { x.classList.remove("on"); }); render(); };
  $("#undo").onclick = function () { if (!history.length) return; future.push(JSON.stringify(state)); applyState(history.pop()); };
  $("#redo").onclick = function () { if (!future.length) return; history.push(JSON.stringify(state)); applyState(future.pop()); };
  $("#reset").onclick = function () { original = result = null; clearError(); fileInput.value = ""; setStage("upload"); };
  $("#download").onclick = exportImage;
  $("#menu").onclick = function () { $("#nav").classList.toggle("open"); };
  window.addEventListener("resize", function () { if (!editor.hidden) { resizeCanvas(); render(); } });
})();
