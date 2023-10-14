
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
                $('#bx-player-1 .name').text(valueData['JUGADOR'][30]);
                var clasesA = valueData['EQUIPO'][30];
                var clasA = clasesA.toLowerCase();
                $('#bx-player-1').addClass(clasA);
                $('#bx-player-1 img').attr('src','../_images/teams/'+clasA+'.png');
                getPlayerA(valueData['CODE'][30]);
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
            $('#bat-AVG-A').text(val.stat.avg);
            $('#bat-HR-A').text(val.stat.homeRuns);
            $('#bat-RBI-A').text(val.stat.rbi);
            $('#bat-OPS-A').text(val.stat.ops);
            $('#bat-SLG-A').text(val.stat.slg);
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
            $('#bat-AVG-B').text(val.stat.avg);
            $('#bat-HR-B').text(val.stat.homeRuns);
            $('#bat-RBI-B').text(val.stat.rbi);
            $('#bat-OPS-B').text(val.stat.ops);
            $('#bat-SLG-B').text(val.stat.slg);
          }
        });
        
    }
};
xmlhttp.open("GET", 'https://statsapi.mlb.com/api/v1/people/'+ipd+'?&season=2023&hydrate=currentTeam,team,stats(type=yearByYear,leagueListId=mlb_hist)', true);
xmlhttp.send();
}
}

}

