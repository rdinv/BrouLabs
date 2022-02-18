const nav =  document.getElementById("navbar");
const containsHide = () => nav.classList.contains('hide');
console.log(nav);

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos && !containsHide()) {
    nav.classList.add("hide");
  } else  if (prevScrollpos > currentScrollPos && containsHide()){
    nav.classList.remove("hide");
  }
  prevScrollpos = currentScrollPos;
};