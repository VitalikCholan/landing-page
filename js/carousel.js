const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller_inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((content) => {
      const duplicatedContent = content.cloneNode(true);
      duplicatedContent.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedContent);
    });
  });
}
