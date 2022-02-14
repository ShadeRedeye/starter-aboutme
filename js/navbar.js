let navbar = document.querySelector(".nav-link");
let burger = document.querySelector('.burger');
let navtext = document.querySelectorAll('.nav-link li');
let noFocus = document.querySelector('.no-focus');

burger.addEventListener('click',() => {
    navbar.classList.toggle("nav-active");
    burger.classList.toggle('pencet');
    noFocus.classList.toggle('focus');
    navtext.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation="";
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
        }
    });
});
