const rightBtn = document.querySelector(".right-btn");

const leftBtn = document.querySelector(".left-btn");

rightBtn.addEventListener("click", () => {
  document.querySelector(".menu-selection").scrollLeft += 500;
});

leftBtn.addEventListener("click", () => {
  document.querySelector(".menu-selection").scrollLeft -= 500;
});
