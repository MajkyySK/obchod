
let slides = document.querySelectorAll(".mySlides")
let dots = document.querySelectorAll(".dot")

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


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


const catbut = document.querySelector(".catbut");

function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

let categories = document.querySelector("#categories");
catbut.onclick = close;
function close(){
    if(categories.style.display === "none" ||categories.style.display ==="none"){
        showSection('categories');
    }
    else{
        categories.style.display = "none";
    }
}


function addtocart(productId) {
    var productElements = document.getElementsByClassName("product");
    
    for (var i = 0; i < productElements.length; i++) {
        var product = productElements[i];
        if (product.id === productId) {
            product.style.display = "inline-block";
        }
    }
}

const cart = document.querySelector(".cart");
const shoppingcart = document.querySelector(".shoppingcart")
cart.onclick = yes;

function yes(){
    if(shoppingcart.style.display === "none" || shoppingcart.style.display === ""){
        shoppingcart.style.display = "block";
    }
    else{
        shoppingcart.style.display = "none";
    }

}








