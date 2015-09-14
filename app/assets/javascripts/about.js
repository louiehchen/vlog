$(document).ready(function(){
  var button = $('#say_hello')
  button.on ('click', function(e){
    e.preventDefault();
    var formData = $('#contact_form').serialize();
    $.ajax({
      url: "/mail",
      type: "POST",
      data: formData,
    }).done(function(data){
      // modal saying mail has been sent
      console.log("good things - " + data);
    }).fail(function(){
      // modal saying something went wrong
      console.log("not so good");
    });
    button.val('Sent!')
    button.attr('disabled', true);
  });
});