let userBtn = document.getElementById("user-btn");
let closeSide = document.getElementById("close-side");



function open() {
  document.getElementById("user-side").style.width = "71vh";
}

function close() {
  document.getElementById("user-side").style.width = "0";
}

userBtn.addEventListener("click", open);
closeSide.addEventListener("click", close);