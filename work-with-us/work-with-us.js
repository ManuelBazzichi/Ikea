const gettingMenu = document.getElementsByClassName('hamburger');
const leftMenu = document.getElementById('left-menu');
const bodyContainer = document.getElementsById('body-container');

function openMenu () {   
    leftMenu.style.visibility = 'visible';
    bodyContainer.style.opacity = '.50';
}

function closeMenu () {
    leftMenu.style.visibility = 'hidden';
}

