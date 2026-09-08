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
