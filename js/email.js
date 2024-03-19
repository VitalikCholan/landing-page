const emailInput = document.getElementById("email");
const emailBtn = document.getElementsByClassName("email-btn")[0];

const modalOverlay = document.getElementById("modal-overlay");

const modalContainerOne = document.getElementById("modal-container-one");
const modalOne = document.getElementById("modal-one");
const closeBtnOne = document.getElementById("close-btn-one");
const modalContainerTwo = document.getElementById("modal-container-two");
const modalTwo = document.getElementById("modal-two");
const closeBtnTwo = document.getElementById("close-btn-two");
const modalContainerThree = document.getElementById("modal-container-three");
const modalThree = document.getElementById("modal-three");
const closeBtnThree = document.getElementById("close-btn-three");

const emailRegEx = /([\w\.-]+)@([\w-]+)\.([a-z]{3,8})$/;

emailBtn.addEventListener("click", () => {
  if (emailInput.value.trim() === "" || emailInput.value.trim() === null) {
    modalContainerOne.style.display = "block";
    modalOverlay.style.display = "block";
  } else if (!emailRegEx.test(emailInput.value)) {
    modalContainerTwo.style.display = "block";
    modalOverlay.style.display = "block";
  } else {
    modalContainerThree.style.display = "block";
    modalOverlay.style.display = "block";
  }
});

closeBtnOne.addEventListener("click", () => {
  modalOne.style.animation = "modalOneEnd 500ms ease-in-out forwards";
  modalOverlay.style.animation = "hideOverlay 500ms ease-in-out forwards";
  setTimeout(() => {
    modalContainerOne.style.display = "none";
    modalOverlay.style.display = "none";
    modalOne.style.animation = "";
    modalOverlay.style.animation = "";
  }, 500);
});

closeBtnTwo.addEventListener("click", () => {
  modalTwo.style.animation = "modalTwoEnd 500ms ease-in-out forwards";
  modalOverlay.style.animation = "hideOverlay 500ms ease-in-out forwards";
  setTimeout(() => {
    modalContainerTwo.style.display = "none";
    modalOverlay.style.display = "none";
    modalTwo.style.animation = "";
    modalOverlay.style.animation = "";
  }, 500);
});

closeBtnThree.addEventListener("click", () => {
  modalThree.style.animation = "modalThreeEnd 500ms ease-in-out forwards";
  modalOverlay.style.animation = "hideOverlay 500ms ease-in-out forwards";
  setTimeout(() => {
    modalContainerThree.style.display = "none";
    modalOverlay.style.display = "none";
    modalThree.style.animation = "";
    modalOverlay.style.animation = "";
  }, 500);
});
