
let id=Math.ceil(Math.random()*4)
 document.getElementById("festName").style.backgroundImage=`linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.9)),url(./img/hero-section/${id}.jpg)`
   

// CountDown Timer 
var countDownDate = new Date("December 8, 2023 00:00:00").getTime();

var x = setInterval(function() {

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
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "00:00:00";
  }
}, 1000);
