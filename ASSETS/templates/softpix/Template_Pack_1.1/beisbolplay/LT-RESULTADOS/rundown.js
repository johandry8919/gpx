"use strict;"
var globalCheck;
// Data
function getElement(id) {
  return document.getElementById(id);
}
const today = new Date();
today.setDate(today.getDate());

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}
var teamsabr = {"108":"LAA","109":"AZ","110":"BAL","111":"BOS","112":"CHC","113":"CIN","114":"CLE","115":"COL","116":"DET","117":"HOU","118":"KC","119":"LAD","120":"WSH","121":"NYM","133":"OAK","134":"PIT","135":"SD","136":"SEA","137":"SF","138":"STL","139":"TB","140":"TEX","141":"TOR","142":"MIN","143":"PHI","144":"ATL","145":"CWS","146":"MIA","147":"NYY","158":"MIL"};

function runTemplateUpdate(){
  getDataB();
}
function getDataB(){
var xmlhttpb = new XMLHttpRequest();
xmlhttpb.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var mlb = JSON.parse(this.responseText);
        var gameslp = mlb.dates[0].games;
        gameslp.forEach(function(g){
            var idtaway = g.teams.away.team.id;
            var idthome = g.teams.home.team.id;
             labelcode = "";
            if(g.status.codedGameState == "I"){
              labelcode = '<div class="labelcode live">EN VIVO</div>';
            }
            if(g.status.codedGameState == "P" || g.status.codedGameState == "S"){
              var pdate = g.gameDate;
              lpdate = new Date(pdate);
              labelcode = "<div class='labelcode'>"+lpdate.getHours()+" : "+lpdate.getMinutes()+" ET</div>";
            }
            if(g.status.codedGameState == "F"){
              labelcode = "<div class='labelcode'>FINALIZADO</div>";
            }
            if(g.teams.away.score === undefined){
              var tscore = '0 - 0';
            }else{
              var tscore = g.teams.away.score+ ' - '+g.teams.home.score;
            }
            var htmlrscore = '<div class="item-game"><div class="team-r"><div class="name-game right medium">'+teamsabr[idtaway]+'</div><div class="pic-game"><img src="../_images/teams/'+g.teams.away.team.id+'.svg" /></div></div><div class="score-game bold">'+labelcode+'<strong>'+tscore+'</strong></div><div class="team-r"><div class="pic-game"><img src="../_images/teams/'+g.teams.home.team.id+'.svg" /></div><div class="name-game left medium">'+teamsabr[idthome]+'</div></div></div>';
            getElement("gamesresult").innerHTML += htmlrscore;
        });

        runAnimationIN()
    }
};
xmlhttpb.open("GET", "https://statsapi.mlb.com/api/v1/schedule?sportId=1&leagueId=103,104&season=2023&startDate="+formatDate(today)+"&endDate="+formatDate(today), true);
xmlhttpb.send();
}

setInterval(function () {
 
    getDataB();
}, 10000);
// Animate text and visual elements


function runAnimationIN() {
  $("#box").delay(200).animate({
    bottom:'0'
});
 
}



function runAnimationOUT() {
  $("#box").delay(200).animate({
    bottom:'-200'
 });
 
}