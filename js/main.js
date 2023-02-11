var menu = document.querySelector('#menu_icon')
var navbar = document.querySelector('.navbar')

console.log(2)

menu.onclick = () => {

    menu.classList.toggle('bx-x')
    navbar.classList.toggle('.active')
    
}

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});