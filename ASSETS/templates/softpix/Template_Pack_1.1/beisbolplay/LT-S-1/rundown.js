"use strict;"
var globalCheck;
// Data


function runAnimationIN() {
  $("#box-left").delay(200).animate({
    width:'1260'
});
$('#titulo').delay(260).fadeIn();
}



function runAnimationOUT() {
  $('#titulo').fadeOut();
    $("#box-left").delay(270).animate({
        width:'0'
    });
}