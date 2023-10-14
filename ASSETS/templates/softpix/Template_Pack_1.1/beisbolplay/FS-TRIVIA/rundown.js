"use strict;"
var globalCheck;
// Data
var control = 1;
var total = 4;
// Animate text and visual elements
function ContentLayer(action){
  if(action === 'play') {
    $("#box").delay(270).animate({
        top:'0'
    });
    $('#subtitulo, #titulo').delay(420).fadeIn();
    for (control = 1; control <= total; control++) {
      var t = control * 2500;
      $('#respuesta'+control).delay(t).animate({
        opacity: '1',
        marginLeft: '0'
      });
      $('#respuesta'+control).addClass('showed');
      
    }
  }
  if(action === 'stop') {
    $('#subtitulo, #titulo, #respuesta1, #respuesta2, #respuesta3, #respuesta4').fadeOut();
    $("#box").delay(270).animate({
        width:'0'
    });
  }
  if(action === 'next') {
    if(control <= total){
      $('.showed').animate({
       opacity: '0.6'
      });
      $('#respuesta'+control).animate({
        opacity: '1',
      });
      $('#respuesta'+control).addClass('showed');
      control++;
    }
  }
}