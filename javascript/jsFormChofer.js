$( document ).ready(function(){

  $("input#checkIngreso.custom-control-input").on( 'change', function() {
      if( $(this).is(':checked') ) {
        $('input#horaIngreso.form-control').attr('required', true)
      } else {
        $('input#horaIngreso.form-control').removeAttr('required')
      }
  });
  $("input#checkSalida.custom-control-input").on( 'change', function() {
      if( $(this).is(':checked') ) {
        $('input#horaSalida.form-control').attr('required', true)
      } else {
        $('input#horaSalida.form-control').removeAttr('required')
      }
  });
})
