const accordions = document.querySelectorAll('.box-faq');

accordions.forEach(accordion => {
    const answer = document.querySelector('.answer');

    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');

        if(accordion.classList.contains('active')){
            answer.style.height = `${answer.scrollHeight}px`;
        } else{
            answer.style.height = '0px';
        }
    });
});