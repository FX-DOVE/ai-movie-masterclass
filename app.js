const welcome = document.getElementById("welcome");
const close = document.getElementById("welcome-close");
const key = "aimovie-welcome-seen";
if (!localStorage.getItem(key)) welcome.hidden = false;
function dismiss() {
  welcome.hidden = true;
  localStorage.setItem(key, "1");
}
close.addEventListener("click", dismiss);
welcome.addEventListener("click", (e) => { if (e.target === welcome) dismiss(); });

const field = document.getElementById("atoms");
for (let i = 0; i < 18; i++) {
  const el = document.createElement("span");
  el.className = "atom";
  const size = 6 + Math.random() * 16;
  el.style.width = el.style.height = size + "px";
  el.style.left = Math.random() * 100 + "%";
  el.style.bottom = -Math.random() * 40 + "px";
  el.style.animationDuration = 14 + Math.random() * 18 + "s";
  el.style.animationDelay = -Math.random() * 20 + "s";
  field.appendChild(el);
}
for (let i = 0; i < 4; i++) {
  const ring = document.createElement("span");
  ring.className = "ring";
  const size = 140 + i * 90;
  ring.style.width = ring.style.height = size + "px";
  ring.style.left = 8 + i * 18 + "%";
  ring.style.top = 12 + i * 10 + "%";
  field.appendChild(ring);
}

function lockPreview(video, asset) {
  if (!video) return;
  video.controlsList = "nodownload";
  video.disablePictureInPicture = true;
  video.removeAttribute("src");
  video.addEventListener("contextmenu", (e) => e.preventDefault());
  video.addEventListener("dragstart", (e) => e.preventDefault());
  fetch(asset).then((r) => {
    if (!r.ok) throw new Error("preview");
    return r.blob();
  }).then((blob) => {
    video.src = URL.createObjectURL(blob);
  }).catch(() => {});
}

lockPreview(document.getElementById("preview-video"), "assets/lesson.mp4");
lockPreview(document.getElementById("preview-thesame"), "assets/preview-thesame.mp4");
lockPreview(document.getElementById("preview-0827"), "assets/preview-0827.mp4");
