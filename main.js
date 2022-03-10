let next = document.getElementById('next');
let previous = document.getElementById('previous');
const selectButtons = document.querySelector('.selection-buttons');




next.addEventListener('click', () => {
    selectButtons.scrollBy({
        left:500,
        behavior:'smooth'
    })
})
next.addEventListener('click', () => {
    next.style.display = 'none';
    
})


previous.addEventListener('click', () => {
    selectButtons.scrollBy({
        left:-140,
        behavior:'smooth'
    })
})



