$(document).ready(function(){
  $('#app-bouncy-btn').on ('click', function(){
    var box = $('#app-bouncy-box')
    var ball = $('<b></b>')
    function randomColor(){
      var hex = '#' + Math.floor(Math.random()*16777215).toString(16);
      return hex;
    };
    ball.css({
      "top": 100,
      "display": "block",
      "width": 20,
      "height": 20,
      "border-radius": 10,
      "background-color": randomColor(),
      "position": "absolute",
    })
    box.append(ball)
  })
})