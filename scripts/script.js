// translucent navbar on scroll 
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("navbar").style.backdropFilter = "blur(10px)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#0d0745";
  }
}
window.onscroll = function () {
  scrollFunction();
};


// hamburger function 
function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}

// random image at hero section 
let id = Math.ceil(Math.random() * 4);
document.getElementById(
  "festName"
).style.backgroundImage = `url(./img/hero-section/${id}.jpg)`;


// CountDown Timer
var countDownDate = new Date("December 8, 2023 00:00:00").getTime();

var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "00:00:00";
  }
}, 1000);



