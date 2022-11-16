//COUNTDOWN CHALLENGE RELATED//
function countdown() {
    var seconds = document.getElementById("seconds").value;
    
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //means, program pausing for 1,000 milliseconds or 1 second//
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}
//END TIMER//

//SLIDESHOW WORK//

let slideIndex = 1;
showSlides(slideIndex);

//next-prev controls//
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//thumnail img controls//
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName(""); //for dot//
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replaced(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}