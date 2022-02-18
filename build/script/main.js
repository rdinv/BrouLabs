const body = document.querySelector("body");

const mobMenu = document.querySelector(".mobMenu-conteiner");
const mobMenuHypers = document.querySelectorAll(".mobLinks");
const burgerBtn = document.querySelector(".burger-menu__btn");
let menuOpen = false;

burgerBtn.addEventListener("click", () => {
  if (!menuOpen) {
    burgerBtn.classList.add("open");
    mobMenu.classList.add("open");
    body.setAttribute("style", "overflow:hidden;");
    menuOpen = true;
  } else {
    burgerBtn.classList.remove("open");
    mobMenu.classList.remove("open");
    body.removeAttribute("style", "overflow:hidden;");
    menuOpen = false;
  }
});


[].forEach.call(mobMenuHypers, function (el) {
    el.addEventListener("click", function (e) {
      if (menuOpen == true) {
        mobMenu.classList.remove("open");
        body.removeAttribute("style", "overflow:hidden;");
        burgerBtn.classList.remove("open");
        menuOpen = false;
      }
    });
  });