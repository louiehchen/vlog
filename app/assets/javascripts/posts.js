$(document).ready(function(){
  $(window).resize(setSize);
  function setSize(){
    $('#video').width(getWidth);
  };
  setSize();
});
function getWidth(){
  return $(window).width() - 120;
};