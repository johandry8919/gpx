"use strict;"
var globalCheck;
let Started = false;
let CurSteps = 0;
let MaxSteps = 1;
// Data

// Animate text and visual elements


function runAnimationIN() {
  $('#box').delay(260).animate({
    right:'45'
  });

  Started = true;
}



function runAnimationOUT() {
  $('#box').delay(260).animate({
    right:'-400'
  });

  Started = false;
}



function runAnimationNEXT() {

  if (CurSteps>=MaxSteps) {
    console.log('Next requested past MaxSteps. Going out!');
    runAnimationOUT()
    return;						
  }
  
  if (Started) {
    console.log('Executing Next normally');
    $('#dot, #speed').animate({
      opacity: '1'
     });
    CurSteps++;
  }
  else{
    console.log('Start, even Next was requested');
    runAnimationIN();
  }

}

