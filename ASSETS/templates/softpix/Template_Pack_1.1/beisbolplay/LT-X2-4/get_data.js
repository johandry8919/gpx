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
                var clases = valueData['EQUIPO'][3];
                var clas = clases.toLowerCase();
                $('#subtitulo').text(valueData['SUBTITLE'][3]);
                $('#titulo').text(valueData['TITLE'][3]);
                $('#player').text(valueData['JUGADOR'][3]);
                $('#teamName').text(clases);
                $('#pp').text(teamsmlb[clases]);
                $('#info-player').addClass(clas);
                $('#info-player img').attr('src','../_images/teams/'+clas+'.png');
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

}
