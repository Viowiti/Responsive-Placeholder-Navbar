const toggler = document.querySelector('.toggler');
const navlinks = document.querySelector('.navlinks')



toggler.addEventListener('click', () => {
navlinks.style.display = 'flex';
});

toggler.addEventListener('dblclick', () => {
    navlinks.style.display = 'none';
    });