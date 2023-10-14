
function runTemplateUpdate(){

    gapi.load('client', initClient);
var SPREADSHEET_ID = '1jySc-VsQZKv-MU2RjS_C-pMYweoh7PV-kf1z2rbyDak';
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';
var sheets;
var valueData = [];
var banners = [];
var j= 0;
var controlaA = 0;
function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyBRYaICc8ckdInbL0JuotA-nXGM-gA-z7I',
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        getDataB();
    }, function (error) {
        console.log(error);
    });
}

function getDataB() {
    gapi.client.sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID
    }).then(function (response) {
        var sheets = response.result.sheets;
        // sheets es un array de objetos que contiene informaciÃ³n sobre cada hoja.
        for (var i = 0; i < sheets.length; i++) {
            var sheet = sheets[i];
            var sheetName = sheet.properties.title;
            if(sheetName == 'LT'){
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: sheetName
            }).then(function (response) {
                var valuesOrigen = response.result;
                valuesOrigen.values[0].map((value, key)=> {
                    valueData[`${value}`] = [];
                    valuesOrigen.values.map((v, k)=>{
                        if(k > 0){
                            valueData[`${value}`].push(v[key]);
                        }
                    });
                });
                console.log(valueData['JUGADOR']);
                $('#bx-player-1 .name').text(valueData['JUGADOR'][16]);
                $('#bx-player-2 .name').text(valueData['JUGADOR'][17]);
                var clasesA = valueData['EQUIPO'][16];
                var clasA = clasesA.toLowerCase();
                var clasesB = valueData['EQUIPO'][17];
                var clasB = clasesB.toLowerCase();
                $('#bx-player-1').addClass(clasA);
                $('#bx-player-2').addClass(clasB);
                $('#bx-player-1 img').attr('src','../_images/teams/'+clasA+'.png');
                $('#bx-player-2 img').attr('src','../_images/teams/'+clasB+'.png');
                getPlayerA(valueData['CODE'][16]);
                getPlayerB(valueData['CODE'][17]);
            }, function (error) {
                console.log(error);
            });
        }
        }

        runAnimationIN()
    }, function (error) {
        console.log(error);
    });
    function getPlayerA(ipd){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var mlb = JSON.parse(this.responseText);
        var person = mlb.people[0].stats[0].splits;
        person.map((val)=>{
          if(val.season === "2023" ){
            $('#bat-IL-A').text(val.stat.inningsPitched);
            $('#bat-CL-A').text(val.stat.earnedRuns);
            $('#bat-K-A').text(val.stat.strikeOuts);
            $('#bat-EFEC-A').text(val.stat.era);
            $('#bat-S-A').text(val.stat.saves);
          }
        });
        
    }
};
xmlhttp.open("GET", 'https://statsapi.mlb.com/api/v1/people/'+ipd+'?&season=2023&hydrate=currentTeam,team,stats(type=yearByYear,leagueListId=mlb_hist)', true);
xmlhttp.send();
}
function getPlayerB(ipd){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var mlb = JSON.parse(this.responseText);
        var person = mlb.people[0].stats[0].splits;
        person.map((val)=>{
          if(val.season === "2023" ){
            $('#bat-IL-B').text(val.stat.inningsPitched);
            $('#bat-CL-B').text(val.stat.earnedRuns);
            $('#bat-K-B').text(val.stat.strikeOuts);
            $('#bat-EFEC-B').text(val.stat.era);
            $('#bat-S-B').text(val.stat.saves);
          }
        });
        
    }
};
xmlhttp.open("GET", 'https://statsapi.mlb.com/api/v1/people/'+ipd+'?&season=2023&hydrate=currentTeam,team,stats(type=yearByYear,leagueListId=mlb_hist)', true);
xmlhttp.send();
}
}

}
