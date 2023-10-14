function runTemplateUpdate(){


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var trck = JSON.parse(this.responseText);
            var pitch = trck[0].Pitch.Location;
            var xp = 120 * pitch.Height / 5;
            $('#dot').css('bottom', xp+'px');
            CurSteps = 0;
            Started = false;
            runAnimationIN();	
        }
    };
    xmlhttp.open("GET", 'game.json', true);
    xmlhttp.send();
       

}

