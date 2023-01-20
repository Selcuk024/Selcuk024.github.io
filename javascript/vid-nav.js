window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let clip = document.querySelector(".vid")
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    clip.setAttribute("autoplay", true);
    clip.setAttribute("loop", true);
} else {
    clip.addEventListener("mouseover", function (e) {
        clip.play();
        clip.setAttribute("autoplay", false);
        clip.setAttribute("loop", false);
    });
    clip.addEventListener("mouseout", function (e) {
        clip.pause();
        clip.currentTime = 0;
    });
}

