/* 
document.onload = document.getElementsByTagName("button").addEventListener('click', function(){
    var num = document.getElementsByTagName("input").innerHTML;
    var x = setInterval(
        function(){
        if(num <= 0){
            document.getElementByTagName("h1").innerHTML = "Finished";
            clearInterval(x);
        
        }
        else{
            num = num--;
            document.getElementByTagName("h1").innerHTML = num;

        }
    },1000)
});
*/
window.onload = function () {
  var x = document.getElementsByTagName("button");

  var h = document.getElementsByTagName("h1");
  x[0].addEventListener("click", function () {
    var n = document.getElementsByTagName("input");
    var num = n[0].value;
    var y = setInterval(function() {
      
        
      if (num <= 0) {
        h[0].innerHTML = "Finished";
        clearInterval(y);
      } else {
        h[0].innerHTML = num;
        num--;
      }
    }, 1000);
  });
};
