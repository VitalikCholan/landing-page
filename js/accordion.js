const accordions = document.querySelectorAll('.box-faq');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
    })
});