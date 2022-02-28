const button = document.querySelectorAll('.buttonSM');

button.forEach((button,i) => {
    button.style.animation = `buttonReveal 0.8s ease-out forwards ${i / 2.6}s`
});