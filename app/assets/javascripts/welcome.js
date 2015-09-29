$(document).ready(function(){

  $(window).on("scroll", function(e){
    if (this.scrollY > 60 ) {
      $('#home-search').addClass('fix-search');
    } else {
      $('#home-search').removeClass("fix-search");
    }
  });

});
