function runTemplateUpdate(){
    gapi.load('client', initClient);
var SPREADSHEET_ID = '1Kblnq2OeGiga-1ofsO2nXVu1G-xWU1zwRM0TlVXn7cI';
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
                $('#player').text(valueData['VALOR'][26]);
                $('#teamName').text(valueData['VALOR'][25]);
                $('#pp').text(valueData['VALOR'][27]);
                var clases = valueData['VALOR'][25];
                var clas = clases.toLowerCase();
                $('#info-player').removeClass();
                $('#info-player').addClass(clas);
                $('#info-player img').attr('src','../_images/teams/'+clas+'.png');
            }, function (error) {
                console.log(error);
            });
        }
        runAnimationIN()
    }, function (error) {
        console.log(error);
    });
}

}

