

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
let countDownDate = new Date("December 8, 2023 00:00:00").getTime();

let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "00:00:00";
  }
}, 1000);

// hide button in event section
document.getElementById('hideBtn').addEventListener('click', function() {
  let boxes = document.querySelectorAll('.box');
  let numToHide = 9; // Change this number to hide a different amount of boxes
  
  for (let i = 0; i <numToHide; i++) {
    if (boxes[i]) {
      if (boxes[i].classList.contains('hidden')) {
        boxes[i].classList.remove('hidden');
        document.getElementById('hideBtn').textContent = 'Show Less';
      } else {
        boxes[i].classList.add('hidden');
        document.getElementById('hideBtn').textContent = 'Show More';
      }
    } 
  }
});


//  scroll button : Bottom to TOP Javascript
let toTopButton = document.getElementById("to-top-button");
// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toTopButton.classList.remove("hidden");
  } else {
    toTopButton.classList.add("hidden");
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
