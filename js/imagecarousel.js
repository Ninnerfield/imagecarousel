let intIndex = 0;

function showImage(i) {
    intIndex += i;

    var images = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    for(n = 0; n < images.length; n++) {
        images[n].style.display = "none";
    }

    for(n = 0; n < dots.length; n++) {
        dots[n].className = dots[n].className.replace(" active", "");
    }

    if(intIndex > images.length - 1) {
        intIndex = 0;
    }
    if(intIndex < 0) {
        intIndex = images.length - 1;
    }

    images[intIndex].style.display = "block";
    dots[intIndex].className += " active";

    
}
function getCurrentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}
window.onload = function() {
    getCurrentYear();
    showImage(intIndex);
}
