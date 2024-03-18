const emailInput = document.getElementById('email');
const emailBtn = document.getElementsByClassName('email-btn')[0];

const modalOverlay = document.getElementById('modal-overlay');

const modalContainerOne = document.getElementById('modal-container-one');
const closeBtnOne = document.getElementById('close-btn-one');
const modalContainerTwo = document.getElementById('modal-container-two');
const closeBtnTwo = document.getElementById('close-btn-two')
const modalContainerThree = document.getElementById('modal-container-three');
const closeBtnThree = document.getElementById('close-btn-three')

const emailRegEx = /([\w\.-]+)@([\w-]+)\.([a-z]{3,8})$/;

emailBtn.addEventListener('click', () => {
    if (emailInput.value.trim() === '' || emailInput.value.trim() === null) {
        modalContainerOne.style.display = 'block';
        modalOverlay.style.display = 'block';
    } else if (!emailRegEx.test(emailInput.value)) {
        modalContainerTwo.style.display = 'block';
        modalOverlay.style.display = 'block'; 
    } else {
        modalContainerThree.style.display = 'block';
        modalOverlay.style.display = 'block'; 
    } 
})

closeBtnOne.addEventListener('click', () => {
    modalContainerOne.style.display = 'none';
    modalOverlay.style.display = 'none'; 
});

closeBtnTwo.addEventListener('click', () => {
    modalContainerTwo.style.display = 'none';
    modalOverlay.style.display = 'none'; 
});

closeBtnThree.addEventListener('click', () => {
    modalContainerThree.style.display = 'none';
    modalOverlay.style.display = 'none'; 
});





