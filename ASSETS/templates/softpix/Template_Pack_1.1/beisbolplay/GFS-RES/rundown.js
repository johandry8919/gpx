"use strict;"
var globalCheck;
// Data
function getElement(id) {
  return document.getElementById(id);
}
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

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
  
    var xmlhttpb = new XMLHttpRequest();
    xmlhttpb.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var mlb = JSON.parse(this.responseText);
            var gameslp = mlb.dates[0].games;
            gameslp.forEach(function(g){
                var idtaway = g.teams.away.team.id;
                var idthome = g.teams.home.team.id;
                 labelcode = "";
                if(g.teams.away.score === undefined){
                  var tscore = '0 - 0';
                }else{
                  var tscore = g.teams.away.score+ ' - '+g.teams.home.score;
                }
                var tnameA = teamsabr[idtaway];
                var tnameB = teamsabr[idthome];
                var tA = tnameA.toLowerCase();
                var tB = tnameB.toLowerCase();
                var htmlrscore = '<div class="item-result"><div class="team-box bold '+tA+'"><div class="team-logo"><img src="../_images/teams/'+tA+'.png" /></div><div class="team-name">'+teamsabr[idtaway]+'</div></div><div class="score-box bold">'+tscore+'</div><div class="team-box bold '+tB+'"><div class="team-logo"><img src="../_images/teams/'+tB+'.png" /></div><div class="team-name">'+teamsabr[idthome]+'</div></div></div>';
                getElement("box-list").innerHTML += htmlrscore;
            });

            runAnimationIN()
        }
    };
    xmlhttpb.open("GET", "https://statsapi.mlb.com/api/v1/schedule?sportId=1&leagueId=103,104&season=2023&startDate="+formatDate(yesterday)+"&endDate="+formatDate(yesterday), true);
    xmlhttpb.send();
    
    

}


function runAnimationIN() {
  $('#content-container').fadeIn();
  $("#box").delay(250).animate({
      top:'0'
  });
  $(".logo").delay(650).animate({
      top:'40px'
  });
  var controla = 1;
  $('.item-result').delay(800).each(function() {
    var t = controla * 100;
    $(this).delay(t).animate({
      opacity:'1'
    });
    controla++;
  });
}



function runAnimationOUT() {
  $(".logo").delay(150).animate({
    top:'-300px'
});
$("#box").delay(250).animate({
    top:'-2000px'
});
$('#content-container').delay(500).fadeOut();
}

