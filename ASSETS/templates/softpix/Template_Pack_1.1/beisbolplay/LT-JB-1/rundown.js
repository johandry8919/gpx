"use strict;"
var globalCheck;
// Data
function getDataB(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var mlb = JSON.parse(this.responseText);
        var stats = mlb.stats;
        $('#bat-runs').text(stats[1].splits[0].stat.atBats);
        $('#bat-homeRuns').text(stats[1].splits[0].stat.rbi);
        $('#bat-strikeOuts').text(stats[1].splits[0].stat.rbi);
        $('#bat-baseOnBalls').text(stats[1].splits[0].stat.roundOutsToAirouts);
    }
}
xmlhttp.open("GET", "https://statsapi.mlb.com/api/v1/people/592273/stats/game/718182", true);
xmlhttp.send();
}
getDataB();


function runAnimationIN() {
  $("#box").delay(200).animate({
    width:'1686'
});
}



function runAnimationOUT() {
  $("#box").delay(200).animate({
    width:'0'
});
}