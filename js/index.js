function onTel() {
  const input = document.createElement("input");
  input.setAttribute("readonly", "readonly");
  input.setAttribute("value", "628984233666");
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, 9999);
  const copy = document.execCommand("Copy");
  if (copy) {
    document.execCommand("Copy");
  }
  document.body.removeChild(input);
}

function onGooglePlay() {
  window.open(
    "https://play.google.com/store/apps/details?id=com.ian.grosiraja"
  );
}

function onAppStore() {
  window.open("https://apps.apple.com/cn/app/grosiraja/id1527875183");
}

function onLinkedin() {
  window.open("https://www.linkedin.com/");
}

function onFacebook() {
  window.open("https://www.facebook.com/Grosiraja-ID-110457654216508");
}

function onIns() {
  window.open("https://www.instagram.com/grosiraja_official/");
}

function onTwitter() {
  window.open("https://twitter.com/GrosirajaID");
}

function onDouyin() {
  window.open("https://vt.tiktok.com/ZSqtNua5/");
}
