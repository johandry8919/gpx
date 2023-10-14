"use strict;"
var globalCheck;
// Data
function getElement(id) {

  console.log(id)
  return document.getElementById(id);
}
var leagues = {'201':'LA Este','202':'LA Central','200':'LA Oeste','204':'LN Este','205':'LN Central','203':'LN Oeste'};
var teamsabr = {"108":"LAA","109":"AZ","110":"BAL","111":"BOS","112":"CHC","113":"CIN","114":"CLE","115":"COL","116":"DET","117":"HOU","118":"KC","119":"LAD","120":"WSH","121":"NYM","133":"OAK","134":"PIT","135":"SD","136":"SEA","137":"SF","138":"STL","139":"TB","140":"TEX","141":"TOR","142":"MIN","143":"PHI","144":"ATL","145":"CWS","146":"MIA","147":"NYY","158":"MIL"};
function runTemplateUpdate(){

 
 
    var xmlhttpb = new XMLHttpRequest();
    xmlhttpb.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var mlb = JSON.parse(this.responseText);
            var data = mlb.records;
            data.forEach(function(d){
              var division = d.division.id;
              var teaminfo = d.teamRecords;
              teaminfo.forEach(function(t){
              var teamcode = t.team.abbreviation;
              var tc = teamcode.toLowerCase();
              var htmlrscore = '<div class="item-result"><div class="team-box '+tc+'"><div class="team-logo"><img src="../_images/teams/'+tc+'.png" /></div></div><div class="score-box bold"><span>'+t.wins+' - </span><span>'+t.losses+'</span><span>'+t.gamesBack+'</span></div></div>';
              getElement("bx-l-"+division).innerHTML += htmlrscore;
              });
            });
            runAnimationIN()
        }
    };
    xmlhttpb.open("GET", "https://statsapi.mlb.com/api/v1/standings?leagueId=104&season=2023&standingsTypes=regularSeason&hydrate=division,league,team", true);
    xmlhttpb.send();
   

}


// Animate text and visual elements




function runAnimationIN() {
  $('.wrap-radio').fadeIn();
  var controla = 1;
  $('.item-result').delay(700).each(function() {
    var t = controla * 100;
    $(this).delay(t).animate({
      opacity:'1'
    });
    controla++;
  });
 
}



function runAnimationOUT() {
  $('#box-list').animate({
    top:'1080'
});
$('.wrap-radio').delay(150).fadeOut();
 
}