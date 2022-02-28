let container = document.querySelector('.card-container');
let card = document.querySelectorAll('.card-content');
let windowres = window.matchMedia('(max-width: 768px)');
let scrollcard = 0;
let expand = document.querySelectorAll('.content-isi');




if (windowres.matches){
    scrollcard = 215;
    container.scrollLeft = 220;
}else{
    scrollcard = 220;
    container.scrollLeft = 160;
}

card.forEach((card,cardI) => {
    card.addEventListener('click', () =>{
        removeCard()
        container.scrollLeft = scrollcard * cardI;
        card.classList.add('card-click');
        setTimeout(() => {
        expand[cardI].classList.add('content-isi-reveal');
        }, 600);
    })
});

function removeCard(){
    card.forEach((card,cardI)=> {
        card.classList.remove('card-click');
        expand[cardI].classList.remove('content-isi-reveal');
    });
}

