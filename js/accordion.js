const accordions = document.querySelectorAll('.box-faq');
const answers = document.querySelectorAll('.answer');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');

        answers.style.height = answers.scrollHeight + 'px';
    })
});
