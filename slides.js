let slides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".dot");

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

    slides[slideindex-1].style.display = 'flex';
    dots[slideindex-1].style.display = "inline-block";
}