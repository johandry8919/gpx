"use strict;"
var globalCheck;
// Data
// Animate text and visual elements
function runAnimationIN() {
  $("#box-left").delay(200).animate({
    width:'650'
});
$('#titulo, #subtitulo').delay(220).fadeIn();
}



function runAnimationOUT() {
  $('#titulo, #subtitulo').fadeOut();
  $("#box-left").delay(180).animate({
      width:'0'
  });
}