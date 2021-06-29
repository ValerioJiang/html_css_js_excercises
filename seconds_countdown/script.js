var timeleft = parseInt(document.getElementById("seconds").innerHTML);
 
var inter = setInterval(function myFunction(){
    if(timeleft <= 0){
      clearInterval(inter);
      document.getElementById("seconds").innerHTML = "Finished";
    } else {
      document.getElementById("seconds").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
  }, parseInt(document.getElementById("seconds").innerHTML)*100);
  window.onload = inter;