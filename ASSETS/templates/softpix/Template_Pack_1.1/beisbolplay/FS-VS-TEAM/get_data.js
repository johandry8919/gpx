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
                var clasesA = valueData['INFO-L'][22];
                var clasA = clasesA.toLowerCase();
                var clasesB = valueData['INFO-R'][22];
                var clasB = clasesB.toLowerCase();
                $('#pic-player-1').addClass(clasA+'-duelop');
                $('#pic-player-2').addClass(clasB+'-duelop');
                $('#bx-player-1 .team img').attr('src','../_images/teams/'+clasA+'.png');
                $('#bx-player-2 .team img').attr('src','../_images/teams/'+clasB+'.png');
                getPlayerA(valueData['INFO-L'][22]);
                //getPlayerB(valueData['INFO-R'][22]);

            
            }, function (error) {
                console.log(error);
            });
            }
        }

        runAnimationIN()
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
        var records = mlb.records;
        records.map((val)=>{
            var tr = val.teamRecords;
            tr.map((v)=>{
                var tea = v.team.abbreviation;
                if(tea == ipd){
                    $('.gp-1').text(v.leagueRecord.wins+'/'+v.leagueRecord.losses);
                    $('.il-1').text(v.runsAllowed+'/'+v.runsScored);
                    /*$('.cl-1').text(val.stat.earnedRuns);
                    $('.k-1').text(val.stat.strikeOuts);
                    $('.efec-1').text(val.stat.era);*/
                }
                
            });
            
          /*if(val.season === "2023" ){
            $('.gp-1').text(val.stat.wins+'/'+val.stat.losses);
            $('.il-1').text(val.stat.inningsPitched);
            $('.cl-1').text(val.stat.earnedRuns);
            $('.k-1').text(val.stat.strikeOuts);
            $('.efec-1').text(val.stat.era);
          }*/
        });
        
    }
};
xmlhttp.open("GET", 'https://statsapi.mlb.com/api/v1/standings?leagueId=104,103&standingsTypes=regularSeason&hydrate=team', true);
xmlhttp.send();
}

}






