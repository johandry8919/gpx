var globalCheck;
// Data
var control = 1;
var total = 4;

let Started = false;

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
            if(sheetName == 'FS'){
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
                $('#titulo').text(valueData['VALOR'][1]);
                $('#respuesta1').text('A) '+valueData['VALOR'][2]);
                $('#respuesta2').text('B) '+valueData['VALOR'][3]);
                $('#respuesta3').text('C) '+valueData['VALOR'][4]);
                $('#respuesta4').text('D) '+valueData['VALOR'][5]);
                if(valueData['VALOR'][6] !== undefined){
                    $('.foto').html('<img src="'+valueData['VALOR'][6]+'" />');
                }

                Started = false;
                runAnimationIN();	
            }, function (error) {
                console.log(error);
            });
            }
        }
    }, function (error) {
        console.log(error);
    });
}

}

function runAnimationIN() {
    $("#box").delay(270).animate({
        top:'0'
    });
    $('#subtitulo, #titulo').delay(420).fadeIn();

    Started = true;
}



function runAnimationOUT() {
    $('#subtitulo, #titulo, #respuesta1, #respuesta2, #respuesta3, #respuesta4').fadeOut();
    $("#box").delay(270).animate({
        width:'0'
    });
  }


  function runAnimationNEXT() {
    if (CurSteps>=MaxSteps) {
        console.log('Next requested past MaxSteps. Going out!');
        runAnimationOUT()
        return;						
    }

    if (Started) {
        console.log('Executing Next normally');
        if(CurSteps <= total){
            $('.showed').animate({
                opacity: '0.6'
               });
               $('#respuesta'+control).animate({
                 opacity: '1',
               });
               $('#respuesta'+control).addClass('showed');
            CurSteps++;
          }
        CurSteps++;
    }
    else{
        console.log('Start, even Next was requested');
        runAnimationIN();
    }
}
