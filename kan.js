r = Math.random;
var b = document.getElementsByTagName('body')[0];

function rcolor() {
  return "rgba(" + Math.floor(r()*255) + ","+Math.floor(r()*255)+","+Math.floor(r()*255)+","+r()+")";
}

function circle() {
  // (x – h)^2 + (y – k)^2 = r2
  // with the center being at the point (h, k) and the radius being "r".

  // ax2 + by2 + cx + dy + e = 0
}

var lines = 0;
var circles = 1;

for (var stuff = lines; stuff < circles + 1; stuff++) {
  var stuffNo = (r() * 50) + 1;
  for (var i = 0; i < stuffNo; i++) {
    var div = document.createElement('div');
    div.style.background = rcolor();
    div.style.top = ((r() * document.documentElement.clientHeight) + 0) + "px";
    div.style.left = ((r() * document.documentElement.clientWidth) + 0) + "px";
    div.style.height =  ((r() * 100) + 100) + "px";
    if (stuff == circle) {
      div.className = "circle";
      div.style.width = div.style.height;
    } else {
      div.className = "line";
      div.style.width = "2px";
      div.style.transform = "rotate(" + (r() * 360) + "deg)"; 
    }

    b.append(div); 
 
    bootStuff(div); 
  }
}

function bootStuff(div) {

    div.speed = r() * 10 + 2;
    div.radius = r() * 100;
    div.clockwise = r() > 0.51 ? 1 : -1;

    setInterval(function() {
      var top = div.style.top;
      var left = div.style.left;
      var rtop = parseInt(top.replace('px', ''));
      var rleft = parseInt(left.replace('px', ''));

      // TODO 
      var nleft = rleft + (div.speed * div.clockwise * div.sense);  
      // TODO 
      var ntop = circle(div.radius, nleft); 

      div.style.top = ntop;
      div.style.left = nleft;

    }, 100); 
}
