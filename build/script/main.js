const burgerBtn = document.querySelector('.burger-menu__btn');
let menuOpen = false;
burgerBtn.addEventListener('click',()=>{
    if(!menuOpen){
        burgerBtn.classList.add('open');
        menuOpen = true;
    }else{
        burgerBtn.classList.remove('open');
        menuOpen = false;
    }
});

const body = document.querySelector('body');

const mobMenu = document.querySelector('.mobMenu-conteiner');


let mobMenuOpen = false;
burgerBtn.addEventListener('click',()=>{
    if(!mobMenuOpen){
        mobMenu.classList.add('open');
        body.setAttribute("style", "overflow:hidden;");
        mobMenuOpen = true;
    }else{
        mobMenu.classList.remove('open');
        body.removeAttribute("style", "overflow:hidden;");
        mobMenuOpen = false;
    }
});


const mobMenuHypers = document.querySelectorAll('.a-mob-hypers');

[].forEach.call(mobMenuHypers, function(el){
    el.addEventListener('click', function (e) {
        if(mobMenuOpen == true){
            mobMenu.classList.remove('open');
            body.removeAttribute("style", "overflow:hidden;");
            mobMenuOpen = false;
        }
    });
});