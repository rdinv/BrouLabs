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