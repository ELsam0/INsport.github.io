const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper .left-right");
const firstcardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let cardPerView = Math.round(carousel.offsetWidth / firstcardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach(btn =>{
    btn.addEventListener("click", () => {
        //console.log(btn.id);
        carousel.scrollLeft += btn.id === "left" ? -firstcardWidth : firstcardWidth;
    });
});

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        console.log("llegaste al final de la izquierda");
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }   
    else 
    if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        console.log("llegaste al final de la derecha");
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
}
carousel.addEventListener("scroll", infiniteScroll);
// header script
const hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function(){
        navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
    }