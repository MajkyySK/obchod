
let slides = document.querySelectorAll(".mySlides")
let dots = document.querySelectorAll(".dot")

const button1 = document.querySelector("#button1"); 
const wrapper = document.querySelector("#wrapper");
    
button1.onclick= log;

function log(){
    if(wrapper.style.display==="none" || wrapper.style.display === ""){
        wrapper.style.display = "flex";
    }
    else{
        wrapper.style.display = "none";
    }
}

let slideindex = 1;
showSlide(slideindex);

function plusSlides(n){
    showSlide(slideindex += n);
}

function currentSlide(n){
    showSlide(slideindex = n);
}

function showSlide(n){
    let i = 0;
    if(n>slides.length) {
        slideindex = 1
    }
    if(n < 1) {
        slideindex = slides.length;
    }

    for(i; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i; i<slides.length; i++){

        dots[i].className = dots[i].className.replace(" active", "");

    }

    slides[slideindex-1].style.display = "flex";
    dots[slideindex-1].style.display = "inline-block";
}

