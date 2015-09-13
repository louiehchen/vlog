$(document).ready(function(){
  var box = $('#app-boxdot-box');
  var height = box.height();
  var width = box.width();

  function randNumber(min, max){
    return (max-min) * Math.random() + min;
  };

  function randomColor(){
    var hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    return hex;
  };

  function fillBox(){

    var randLength = randNumber(5, 45);
    var randTop = (height - randLength)*Math.random();
    var randLeft = (width - randLength)*Math.random();
    var circle = $("<div class='animate'></div>");
    var color = randomColor();

    box.append(
      circle.css({
        "background-color": randomColor(),
        "width": randLength,
        "height": randLength,
        "top": randTop,
        "left": randLeft,
      })
    );
  };
  var interval = setInterval( fillBox, 100 );
});