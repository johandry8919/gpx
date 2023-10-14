"use strict;"
var globalCheck;
// Data
// Animate text and visual elements


function runAnimationIN() {
  $("#box-left").delay(200).animate({
    width:'920'
});
$("#box-right").delay(250).animate({
    width:'720'
});
}



function runAnimationOUT() {
  $("#box-left").delay(200).animate({
    width:'0'
});
$("#box-right").delay(250).animate({
    width:'0'
});
}