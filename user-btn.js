let userBtn = document.getElementById("user-btn");
let closeSide = document.getElementById("close-side");



function open() {
  document.getElementById("user-side").style.width = "400px";  
//   bodyContainer.style.opacity = '.40';
//   bodyContainer.style.display = 'block';  
}

function close() {
  document.getElementById("user-side").style.width = "0";
//   bodyContainer.style.opacity = '1';
//   bodyContainer.style.display = 'none';
}


userBtn.addEventListener("click", open);
closeSide.addEventListener("click", close);