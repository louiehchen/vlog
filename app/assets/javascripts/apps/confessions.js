$(document).ready(function(){
  var form = $('#new_confession')
  var confession = $('#shared-confession')
  $('#app-conf-submit').on ('click', function(e){
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/apps/confessions',
      data: form.serialize()
    })
    .done(function(resp){
      confession.html(resp)
      confession.hide();
      confession.fadeIn('slow')
    })
    .fail(function(error){
      console.log(error);
    })
    $('#confession-body').val('')
  })
})