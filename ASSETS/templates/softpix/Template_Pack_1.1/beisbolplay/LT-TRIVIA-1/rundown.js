"use strict;"
var globalCheck;
// Data
function insertData(data){
  $('#titulo1').text(data['titulo1']);
}
// Animate text and visual elements



function runAnimationIN() {
  $("#box-left").delay(150).animate({
    width:'1300'
});
$('#subtitulo, #titulo, #respuesta1, #respuesta2, #respuesta3, #respuesta4').delay(220).fadeIn();
}



function runAnimationOUT() {
  $('#subtitulo, #titulo, #respuesta1, #respuesta2, #respuesta3, #respuesta4').fadeOut();
  $("#box-left").delay(270).animate({
      width:'0'
  });
}