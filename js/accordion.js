const accordions = document.querySelectorAll('.box-faq');
const answers = document.querySelectorAll('.answer');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        if(accordion.classList.toggle('active')){
            answers.style.height = `${answers.scrollHeight}px`;
        } else{
            answers.style.height = '0px';
        }
    })
});

