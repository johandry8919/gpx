"use strict;"
var globalCheck;
// Data
// Animate text and visual elements


function runAnimationIN() {
  $('#content-container').fadeIn();
  $('#fondo-a').animate({
      opacity:'1'
  });
  $('#fondo-a').get(0).play();
  $("#box").delay(1800).animate({
      top:'0'
  });
}



function runAnimationOUT() {
  $("#box").delay(150).animate({
    top:'-3000'
});
$('#fondo-a').delay(350).animate({
    opacity:'0'
});
$('#content-container').delay(450).fadeIn();
}