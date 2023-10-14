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
                var regExp = /\(([^)]+)\)/;
                $('#bx-player-1 .name').text(valueData['EQUIPO'][21]);
                $('#bx-player-2 .name').text(valueData['EQUIPO'][22]);
                var clasesA = valueData['EQUIPO'][21];
                var clasA = clasesA.toLowerCase();
                var clasesB = valueData['EQUIPO'][22];
                var clasB = clasesB.toLowerCase();
                $('#bx-player-1').addClass(clasA);
                $('#bx-player-2').addClass(clasB);
                $('#bx-player-1 img').attr('src','../_images/teams/'+clasA+'.png');
                $('#bx-player-2 img').attr('src','../_images/teams/'+clasB+'.png');
                rA = valueData['JUGADOR'][21];
                srA1 = rA.replace('(','<span>');
                srAC = srA1.replace(')','</span>');
                rB = valueData['JUGADOR'][22];
                srB1 = rB.replace('(','<span>');
                srBC = srB1.replace(')','</span>');
                tA = valueData['CODE'][21];
                stA1 = tA.replace('(','<span>');
                stAC = stA1.replace(')','</span>');
                tB = valueData['CODE'][22];
                stB1 = tB.replace('(','<span>');
                stBC = stB1.replace(')','</span>');
                mA = valueData['SUBTITLE'][21];
                smA1 = mA.replace('(','<span>');
                smAC = smA1.replace(')','</span>');
                mB = valueData['SUBTITLE'][22];
                smB1 = mB.replace('(','<span>');
                smBC = smB1.replace(')','</span>');
                $('#bat-r-A').html(srAC);
                $('#bat-r-B').html(srBC);
                $('#bat-t-A').html(stAC);
                $('#bat-t-B').html(stBC);
                $('#bat-m-A').html(smAC);
                $('#bat-m-B').html(smBC);
                if(valueData['TITLE'][21] !== 'undefined'){
                    $('.sponsor-wrap img').attr('src',valueData['TITLE'][21]);
                    $('.sponsor-wrap').show();
                }
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

