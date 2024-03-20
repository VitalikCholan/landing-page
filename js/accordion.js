const accordions = document.querySelectorAll(".box-faq");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const isActive = accordion.classList.toggle("active");

    const answer = accordion.querySelector(".answer");

    if (isActive) {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    } else {
      answer.style.maxHeight = "0px";
    }
  });
});
