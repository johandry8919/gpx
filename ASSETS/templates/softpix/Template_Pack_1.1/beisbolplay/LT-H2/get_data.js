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
                console.log(valueData);
                $('#subtitulo').text(valueData['VALOR'][33]);
                $('#titulo').text(valueData['VALOR'][34]);
                
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
