var newYear = new Date("Jan 1, 2022").getTime();

var countDown = setInterval(function () {
  var d = new Date().getTime();

  var diff = newYear - d;

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));

  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (diff < 0) {
    clearInterval(countDown);
  }
}, 1000);

window.onload = countDown;
