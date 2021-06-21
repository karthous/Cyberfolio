var slideIndex = 0;

function changeSlides(n) {
    slideIndex = slideIndex + n;
    
    if (slideIndex >= document.getElementsByClassName("slide").length){
        slideIndex = 0;
    }

    if (slideIndex < 0){
        slideIndex = document.getElementsByClassName("slide").length - 1;
    }

    showSlides(slideIndex);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    slides[n].style.display = "inline"; 
}

window.onload = function(){
    var i;
    var prev_next = document.getElementsByClassName("prev_next");

    showSlides(slideIndex);

    for (i = 0; i < prev_next.length; i++) {
        prev_next[i].style.display = "inline"; 
    }
}
