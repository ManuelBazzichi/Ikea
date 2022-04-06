const gettingMenu = document.querySelector('.hamburger');
const leftMenu = document.getElementById('left-menu');
const bodyContainer = document.querySelector('.body-container');
const closingMenu = document.querySelector('.lm-logo-back');


function openMenu () {   
    bodyContainer.style.opacity = '.40';
    bodyContainer.style.display = 'block';
    leftMenu.style.left = `0`;
    leftMenu.style.width= '25vw';
    leftMenu.style.visibility = 'visible';
}

function closeMenu () {
    leftMenu.style.left = `-${leftMenu.style.width}`;
    bodyContainer.style.opacity = '1';
    bodyContainer.style.display = 'none';
}

gettingMenu.addEventListener("click", openMenu);
closingMenu.addEventListener("click", closeMenu);
bodyContainer.addEventListener("click", closeMenu);
