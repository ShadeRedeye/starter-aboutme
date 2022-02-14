let gunung1 = document.querySelector("#gunung1");
let gunung2 = document.querySelector("#gunung2");
let artikelIsi = document.querySelectorAll(".artikelIsi");
let navbar = document.querySelector(".nav-link");
let burger = document.querySelector('.burger');
let navtext = document.querySelectorAll('.nav-link li');
let noFocus = document.querySelector('.no-focus');
let cardContent = document.querySelectorAll(".card-content");

window.onbeforeunload= () => {
    if(window.scrollTo){
        window.scrollTo(0,0);
    }
}
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    gunung1.style.top = value * 0.45 + "px";
    gunung2.style.top = value/3 * 1 + "px";

    for(i = 0; i < artikelIsi.length; i++){
    let windowHeight = window.innerHeight;
    let revealTop = artikelIsi[i].getBoundingClientRect().top;
    let revealPoint = 45;
    
    if(revealTop < windowHeight - revealPoint 

    ){
        artikelIsi[i].style.animation = `teksMuncul 1s ease forwards`;
    }
    else {
        artikelIsi[i].style.animation = `teksHilang 1s ease forwards`;
    }
    }

    cardContent.forEach((kartu,index) => {

        let windowHeight = window.innerHeight;
        let revealTop = cardContent[index].getBoundingClientRect().top;
        let revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint 
        ){
            kartu.style.animation = `cardMuncul 1s ease forwards ${index /7 + 0.2}s `;
        }
        else {
            kartu.style.animation = `cardHilang 1s ease forwards`
        }

    })

});

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

