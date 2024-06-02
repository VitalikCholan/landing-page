const emailInput = document.querySelector('#email');
const emailBtn = document.querySelector('.email-btn');

const modalOverlay = document.querySelector('.modal-overlay');

const modalContainerOne = document.querySelector('.modal-container-one');
const modalOne = document.querySelector('.modal-one');
const closeBtnOne = document.querySelector('.close-btn-one');
const modalContainerTwo = document.querySelector('.modal-container-two');
const modalTwo = document.querySelector('.modal-two');
const closeBtnTwo = document.querySelector('.close-btn-two');
const modalContainerThree = document.querySelector('.modal-container-three');
const modalThree = document.querySelector('.modal-three');
const closeBtnThree = document.querySelector('.close-btn-three');

const emailRegEx = /([\w\.-]+)@([\w-]+)\.([a-z]{3,8})$/;

emailBtn.addEventListener('click', () => {
  if (emailInput.value.trim() === '' || emailInput.value.trim() === null) {
    modalContainerOne.style.display = 'block';
    modalOverlay.style.display = 'block';
    setTimeout(() => {
      modalOne.style.animation = 'modalOneEnd 500ms ease-in-out forwards';
      modalOverlay.style.animation = 'hideOverlay 500ms ease-in-out forwards';
      setTimeout(() => {
        modalContainerOne.style.display = 'none';
        modalOverlay.style.display = 'none';
        modalOne.style.animation = '';
        modalOverlay.style.animation = '';
      }, 500);
    }, 4500);
  } else if (!emailRegEx.test(emailInput.value)) {
    modalContainerTwo.style.display = 'block';
    modalOverlay.style.display = 'block';
    setTimeout(() => {
      modalTwo.style.animation = 'modalTwoEnd 500ms ease-in-out forwards';
      modalOverlay.style.animation = 'hideOverlay 500ms ease-in-out forwards';
      setTimeout(() => {
        modalContainerTwo.style.display = 'none';
        modalOverlay.style.display = 'none';
        modalTwo.style.animation = '';
        modalOverlay.style.animation = '';
      }, 500);
    }, 4500);
  } else {
    modalContainerThree.style.display = 'block';
    modalOverlay.style.display = 'block';
    // setTimeout(() => {
    //   modalThree.style.animation = 'modalThreeEnd 500ms ease-in-out forwards';
    //   modalOverlay.style.animation = 'hideOverlay 500ms ease-in-out forwards';
    //   setTimeout(() => {
    //     modalContainerThree.style.display = 'none';
    //     modalOverlay.style.display = 'none';
    //     modalThree.style.animation = '';
    //     modalOverlay.style.animation = '';
    //   }, 500);
    // }, 4500);
  }
});

closeBtnOne.addEventListener('click', () => {
  modalOne.style.animation = 'modalOneEnd 500ms ease-in-out forwards';
  modalOverlay.style.animation = 'hideOverlay 500ms ease-in-out forwards';
  setTimeout(() => {
    modalContainerOne.style.display = 'none';
    modalOverlay.style.display = 'none';
    modalOne.style.animation = '';
    modalOverlay.style.animation = '';
  }, 500);
});

closeBtnTwo.addEventListener('click', () => {
  modalTwo.style.animation = 'modalTwoEnd 500ms ease-in-out forwards';
  modalOverlay.style.animation = 'hideOverlay 500ms ease-in-out forwards';
  setTimeout(() => {
    modalContainerTwo.style.display = 'none';
    modalOverlay.style.display = 'none';
    modalTwo.style.animation = '';
    modalOverlay.style.animation = '';
  }, 500);
});

closeBtnThree.addEventListener('click', () => {
  modalThree.style.animation = 'modalThreeEnd 500ms ease-in-out forwards';
  modalOverlay.style.animation = 'hideOverlay 500ms ease-in-out forwards';
  setTimeout(() => {
    modalContainerThree.style.display = 'none';
    modalOverlay.style.display = 'none';
    modalThree.style.animation = '';
    modalOverlay.style.animation = '';
  }, 500);
});
