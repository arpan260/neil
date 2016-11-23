/******* Resizing Menu bar *******/
$(document).on("scroll", function() {
    if ($(document).scrollTop() > 100) {
        $("header").removeClass("large").addClass("small");
    } else {
        $("header").removeClass("small").addClass("large");
    }
});
/************End of Resizing Menu bar *******/
/***** SIDE NAVIGATION ****/
/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/***** END OF SIDE NAVIGATION ****/
/******* Slideshow container ******/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
/*******END OF Slideshow container ******/