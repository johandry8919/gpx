"use strict;"
var globalCheck;
// Data
// Animate text and visual elements
//var control = 1;
var total = 4;
let Started = false;


function runAnimationIN() {
  $("#box-left").delay(200).animate({
    width:'870'
  });
  $("#box-tt").delay(320).animate({
    left: '105'
  });
  $('#logo-item').delay(400).animate({
    top: '-90',
    opacity: '1'
  });

  for (control = 1; control <= total; control++) {
    var t = control * 2500;
    $('.showed').delay(2500).animate({
     opacity: '0.6'
    });
    $('#tt-'+control).delay(t).animate({
      opacity: '1',
      marginLeft: '0'
    });
    $('#tt-'+control).addClass('showed');
    
  }

  Started = true;
}



function runAnimationOUT() {
  $("#box-tt").delay(100).animate({
    left: '-770'
  });
  $("#box-left").delay(200).animate({
      width:'0'
  });
}


function runAnimationNEXT() {
  if (CurSteps>=MaxSteps) {
      console.log('Next requested past MaxSteps. Going out!');
      runAnimationOUT()
      return;						
  }

  if (Started) {
    if(control <= total){
      $('.showed').animate({
       opacity: '0.6'
      });
      $('#tt-'+control).animate({
        opacity: '1',
        marginLeft: '0'
      });
      $('#tt-'+control).addClass('showed');
      control++;
    }
  }
  else{
      console.log('Start, even Next was requested');
      runAnimationIN();
  }
}
