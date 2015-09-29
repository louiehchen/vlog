$(document).ready(function(){
  var clock = $('clock')
  var start = $('.start')
  var stop = $('.stop')
  var reset = $('.reset')
  var mil = 0, sec = 0, min = 0, t;

  function randomColor(){
    var hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    return hex;
  };

  function switchBackground(){
    $('#app-stopwatch').css("background-color", randomColor());
  }

  function add() {
    mil++;
    if (mil >= 100) {
      mil = 0;
      sec++;
      switchBackground();
      if (sec >= 60) {
        sec = 0;
        min++
      };
    };

    function makeTimeString() {
      return (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec ? (sec > 9 ? sec : "0" + sec) : "00") + ":" + (mil > 9 ? mil : "0" + mil)
    };

    clock.html(makeTimeString);
    clockStart();
  };

  function clockStart() {
    t = setTimeout(add, 10);
  };

  function resetClock() {
    clock.html("00:00:00")
    mil=0;
    sec=0;
    min=0;
  };

  function stopClock() {
    clearTimeout(t);
  }

  start.click(clockStart)
  stop.click(stopClock)
  reset.click(resetClock);

});