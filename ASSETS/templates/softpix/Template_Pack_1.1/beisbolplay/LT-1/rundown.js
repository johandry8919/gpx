"use strict;"
var globalCheck;
// Data
function insertData(data){
  $('#titulo1').text(data['titulo1']);
}
// Animate text and visual elements


function runAnimationIN() {
  $("#box-left").delay(200).animate({
    width:'1260'
});
$('#titulo').delay(300).fadeIn();
}



function runAnimationOUT() {
  $('#titulo').fadeOut();
    $("#box-left").delay(270).animate({
        width:'0'
    });
}