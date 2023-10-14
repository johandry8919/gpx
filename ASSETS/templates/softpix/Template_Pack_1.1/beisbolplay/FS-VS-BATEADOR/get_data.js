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

var teamsmlb = {"OAK":"Oakland Athletics","PIT":"Pittsburgh Pirates","SD":"San Diego Padres","SEA":"Seattle Mariners","SF":"San Francisco Giants","STL":"St. Louis Cardinals","TB":"Tampa Bay Rays","TEX":"Texas Rangers","TOR":"Toronto Blue Jays","MIN":"Minnesota Twins","PHI":"Philadelphia Phillies","ATL":"Atlanta Braves","CWS":"Chicago White Sox","MIA":"Miami Marlins","NYY":"New York Yankees","MIL":"Milwaukee Brewers","LAA":"Los Angeles Angels","AZ":"Arizona Diamondbacks","BAL":"Baltimore Orioles","BOS":"Boston Red Sox","CHC":"Chicago Cubs","CIN":"Cincinnati Reds","CLE":"Cleveland Guardians","COL":"Colorado Rockies","DET":"Detroit Tigers","HOU":"Houston Astros","KC":"Kansas City Royals","LAD":"Los Angeles Dodgers","WSH":"Washington Nationals","NYM":"New York Mets"};
function getDataB() {
    gapi.client.sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID
    }).then(function (response) {
        var sheets = response.result.sheets;
        // sheets es un array de objetos que contiene informaciÃ³n sobre cada hoja.
        for (var i = 0; i < sheets.length; i++) {
            var sheet = sheets[i];
            var sheetName = sheet.properties.title;
            if(sheetName == 'GO'){
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
                var clasesA = valueData['INFO-L'][6];
                var clasA = clasesA.toLowerCase();
                var clasesB = valueData['INFO-R'][6];
                var clasB = clasesB.toLowerCase();
                $('#bx-player-1 .name .nombre').text(valueData['INFO-L'][7]);
                $('#bx-player-2 .name .nombre').text(valueData['INFO-R'][7]);
                $('#bx-player-1 .name .equipo').text(teamsmlb[clasesA]);
                $('#bx-player-2 .name .equipo').text(teamsmlb[clasesB]);
                $('#bx-player-1').addClass(clasA);
                $('#bx-player-2').addClass(clasB);
                $('#pic-player-1').addClass(clasA+'-duelop');
                $('#pic-player-2').addClass(clasB+'-duelop');
                $('#bx-player-1 .team img').attr('src','../_images/teams/'+clasA+'.png');
                $('#bx-player-2 .team img').attr('src','../_images/teams/'+clasB+'.png');
                getPlayerA(valueData['INFO-L'][8]);
                getPlayerB(valueData['INFO-R'][8]);
                if(valueData['INFO-L'][9] !== undefined){
                    $('#pic-player-1').html('<img src="'+valueData['INFO-L'][9]+'" />');
                }
                if(valueData['INFO-R'][9] !== undefined){
                    $('#pic-player-2').html('<img src="'+valueData['INFO-R'][9]+'" />');
                }
                runAnimationIN()
            }, function (error) {
                console.log(error);
            });
            }
        }

    
    }, function (error) {
        console.log(error);
    });
}
function isKeyExists(obj,key){
    return obj.hasOwnProperty(key);
}
function getPlayerA(ipd){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var mlb = JSON.parse(this.responseText);
        var person = mlb.people[0].stats[0].splits;
        person.map((val)=>{
          if(val.season === "2023" ){
            $('.avg-1').text(val.stat.avg);
            $('.hr-1').text(val.stat.homeRuns);
            $('.ci-1').text(val.stat.rbi);
            $('.ops-1').text(val.stat.ops);
            $('.slg-1').text(val.stat.slg);
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
            $('.avg-2').text(val.stat.avg);
            $('.hr-2').text(val.stat.homeRuns);
            $('.ci-2').text(val.stat.rbi);
            $('.ops-2').text(val.stat.ops);
            $('.slg-2').text(val.stat.slg);
          }
        });
        
    }
};
xmlhttp.open("GET", 'https://statsapi.mlb.com/api/v1/people/'+ipd+'?&season=2023&hydrate=currentTeam,team,stats(type=yearByYear,leagueListId=mlb_hist)', true);
xmlhttp.send();
}

}
