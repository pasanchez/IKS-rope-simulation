var pieces = [];
var mouseX = 0
 , mouseY = 0;
window.onload = function(){
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");
  canvas.style.backgroundColor = "rgba(61,61,61,255)";
  var width = canvas.width = window.innerWidth - 25;
  var height = canvas.height = window.innerHeight - 25;
  var prev = null;
  for (var i=1;i < 150; i++)
  {
      var s = Segment.create(width/2,height/2,0,5,3);
      s.parent = prev;
      prev = s;
  }
  loop();

function loop(){
    context.clearRect(0,0,width,height);
    prev.follow(mouseX,mouseY);
    prev.draw(context);
    requestAnimationFrame(loop);
  }

  document.body.addEventListener("mousemove", function(event){
      mouseX = event.clientX;
      mouseY = event.clientY;
  });
}
