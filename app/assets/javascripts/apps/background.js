$(document).ready(function(){
  $('#app1').on ('click', function(){
    $('.app-background').css("background-color", randomColor());
  });

  function randomColor(){
    var hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    return hex;
  };
})