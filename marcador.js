var canvas = document.getElementById('Canvas');
var context = canvas.getContext("2d");
var mapSpriteAtual = "";
var Markers = new Array();

//criando os mapsprites do jogo

var Mapas = new Array();

// Create a basic class which will be used to create a marker
var Marker = function () {
    this.Sprite = new Image();
    this.Sprite.src = "images/tumulo.png";
    this.Width = 30;
    this.Height = 30;
    this.XPos = 0;
    this.YPos = 0;
	this.Map = mapSpriteAtual.id;
	this.Atual = true;
	this.horas = "";
	this.minutos = "";
	this.where = "";
    this.XTooltip = "";
    this.YTooltip = "";
}

var tempMarker = new Marker();

var carregar = function () {

var mapSprite = new Image();
mapSprite.id = "MIS01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Abelha-Rainha | Monte Mjolnir (04)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MIS02";
mapSprite.src = "images/gld_dun02.png";
mapSprite.name= "Abelha-Rainha | Calabouço do Feudo de Luina"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "AMO01";
mapSprite.src = "images/moc_pryd06.png";
mapSprite.name= "Amon Ra | Dentro da Pirâmide (6)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "AMO02";
mapSprite.src = "images/moc_pryd06.png";
mapSprite.name= "Amon Ra Pesadelo | Base da Pirâmide 02 - Pesadelo"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "ATR01";
mapSprite.src = "images/ra_fild03.png";
mapSprite.name= "Atroce | Planície de Ida (03)"
mapSprite.tempo= 180;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "ATR02";
mapSprite.src = "images/ra_fild04.png";
mapSprite.name= "Atroce | Planície de Ida (04)"
mapSprite.tempo= 300;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "ATR03";
mapSprite.src = "images/ve_fild01.png";
mapSprite.name= "Atroce | Campo de Veins (01)"
mapSprite.tempo= 180;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "ATR04";
mapSprite.src = "images/ve_fild02.png";
mapSprite.name= "Atroce | Campo de Veins (02)"
mapSprite.tempo= 360;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "ATR05";
mapSprite.src = "images/gld_dun03.png";
mapSprite.name= "Atroce | 2º Calabouço da Guilda"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BAF01";
mapSprite.src = "images/prt_maze03.png";
mapSprite.name= "Bafomé | Labirinto da Floresta (3)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BAF02";
mapSprite.src = "images/gld_dun03.png";
mapSprite.name= "Bafomé | Calabouço do Feudo das Valquírias"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BEL01";
mapSprite.src = "images/abbey03.png";
mapSprite.name= "Belzebu | Monastério"
mapSprite.tempo= 720;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "GTB01";
mapSprite.src = "images/prt_sewb4.png";
mapSprite.name= "Besouro-Ladrão Dourado | Esgotos de Prontera (4)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BIS01";
mapSprite.src = "images/abbey02.png";
mapSprite.name= "Bispo Decadente | Monastério"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BOI01";
mapSprite.src = "images/bra_dun02.png";
mapSprite.name= "Boitatá | Profundezas das Cataratas"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "STO01";
mapSprite.src = "images/xmas_dun02.png";
mapSprite.name= "Cavaleiro da Tempestade | Sala de Construção de Brinquedos"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DET01";
mapSprite.src = "images/abyss_03.png";
mapSprite.name= "Detardeurus | Caverna Subterrânea do Lago do Abismo"
mapSprite.tempo= 180;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DOP01";
mapSprite.src = "images/gef_dun02.png";
mapSprite.name= "Doppelganger | Geffenia (1)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DOP02";
mapSprite.src = "images/gld_dun02.png";
mapSprite.name= "Doppelganger | Calabouço do Feudo de Luina"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DOP03";
mapSprite.src = "images/gld_dun04.png";
mapSprite.name= "Doppelganger | Calabouço do Feudo de Britoniah"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DRAC01";
mapSprite.src = "images/gef_dun01.png";
mapSprite.name= "Drácula | Calabouço de Geffen (2)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DRA01";
mapSprite.src = "images/treasure02.png";
mapSprite.name= "Drake | Navio Fantasma (2)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "EDD01";
mapSprite.src = "images/pay_fild10.png";
mapSprite.name= "Eddga | Floresta de Payon (10)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "EDD02";
mapSprite.src = "images/gld_dun01.png";
mapSprite.name= "Eddga | Calabouço do Feudo do Bosque Celestial"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "EDD03";
mapSprite.src = "images/gld_dun01.png";
mapSprite.name= "Eddga | 2º Calabouço da Guilda"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "EGN01";
mapSprite.src = "images/lhz_dun02.png";
mapSprite.name= "Egnigem Cenia | Laboratório de Somatologia"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "FAR01";
mapSprite.src = "images/in_sphinx5.png";
mapSprite.name= "Faraó | Esfinge (5)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MOO01";
mapSprite.src = "images/pay_dun04.png";
mapSprite.name= "Flor do Luar | Caverna de Payon (4)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MOO02";
mapSprite.src = "images/gld_dun01.png";
mapSprite.name= "Flor do Luar | Calabouço do Feudo do Bosque Celestial"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "FRE01";
mapSprite.src = "images/moc_fild17.png";
mapSprite.name= "Freeoni | Deserto Sograt (17)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "GEN01";
mapSprite.src = "images/gld2_pay.png";
mapSprite.name= "General Daehyon | Portal do Abismo: Ventos Ancestrais"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "GT01";
mapSprite.src = "images/tur_dun04.png";
mapSprite.name= "General Tartaruga | Palácio da Ilha da Tartaruga"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "GIO01";
mapSprite.src = "images/gld2_ald.png";
mapSprite.name= "Gioia | Portal do Abismo: Lágrimas do Herói"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "GOR01";
mapSprite.src = "images/mosk_dun03.png";
mapSprite.name= "Gorynych | Floresta Encantada 3"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "KAD01";
mapSprite.src = "images/gld2_gef.png";
mapSprite.name= "Guardião Morto Kades | Portal do Abismo: Colina dos Mortos"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "HAT01";
mapSprite.src = "images/xmas_fild01.png";
mapSprite.name= "Hatii | Arredores de Lutie"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "IFR01";
mapSprite.src = "images/thor_v03.png";
mapSprite.name= "Ifrit | Vulcão de Thor"
mapSprite.tempo= 660;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "KIE01";
mapSprite.src = "images/kh_dun02.png";
mapSprite.name= "Kiel-D-01 | Fábrica de Robôs - Nível 2"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "KRA01";
mapSprite.src = "images/iz_dun05.png";
mapSprite.name= "Kraken | Túnel Submarino (6)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BAC01";
mapSprite.src = "images/lou_dun03.png";
mapSprite.name= "Lady Branca | Suei Long Gon"
mapSprite.tempo= 116;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "TAN01";
mapSprite.src = "images/ayo_dun02.png";
mapSprite.name= "Lady Tanee | Interior do Santuário Ancestral"
mapSprite.tempo= 420;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "LEA01";
mapSprite.src = "images/dew_dun01.png";
mapSprite.name= "Leak | Vulcão Krakatau"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MAY01";
mapSprite.src = "images/anthell02.png";
mapSprite.name= "Maya | Formigueiro Infernal (2)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MAY02";
mapSprite.src = "images/gld_dun03.png";
mapSprite.name= "Maya | Calabouço do Feudo das Valquírias"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MAY03";
mapSprite.src = "images/gld_dun02.png";
mapSprite.name= "Maya | 2º Calabouço da Guilda"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MOC01";
mapSprite.src = "images/moc_fild22.png";
mapSprite.name= "Morroc Ferido | Ruptura Dimensional"
mapSprite.tempo= 720;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "OH01";
mapSprite.src = "images/gef_fild03.png";
mapSprite.name= "Orc Herói | Arredores de Geffen (03)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "OSI01";
mapSprite.src = "images/moc_pryd04.png";
mapSprite.name= "Osíris | Dentro da Pirâmide (4)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "PES01";
mapSprite.src = "images/ra_san05.png";
mapSprite.name= "Pesar Noturno | Santuário"
mapSprite.tempo= 300;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "PYU01";
mapSprite.src = "images/gld2_prt.png";
mapSprite.name= "Pyuriel Furiosa | Portal do Abismo: Caminho do Guerreiro"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "SCA01";
mapSprite.src = "images/dic_dun02.png";
mapSprite.name= "Rainha Scaraba | Túnel Kamidal 02"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "SCA02";
mapSprite.src = "images/dic_dun02.png";
mapSprite.name= "Rainha Scaraba Dourada | Túnel Kamidal - Pesadelo"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "RSX01";
mapSprite.src = "images/ein_dun02.png";
mapSprite.name= "RSX-0806 | Calabouço da Mina"
mapSprite.tempo= 125;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "INC01";
mapSprite.src = "images/ama_dun03.png";
mapSprite.name= "Samurai Encarnado | Templo Subterrâneo de Amatsu"
mapSprite.tempo= 91;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DL01";
mapSprite.src = "images/gl_chyard.png";
mapSprite.name= "Senhor das Trevas | Cemitério de Glast Heim"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DL02";
mapSprite.src = "images/gld_dun04.png";
mapSprite.name= "Senhor das Trevas | Calabouço do Feudo de Britoniah"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DL03";
mapSprite.src = "images/gld_dun04.png";
mapSprite.name= "Senhor das Trevas | 2º Calabouço da Guilda"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MOR01";
mapSprite.src = "images/niflheim.png";
mapSprite.name= "Senhor dos Mortos | Nifflheim, O reino dos mortos"
mapSprite.tempo= 133;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "OL01";
mapSprite.src = "images/gef_fild10.png";
mapSprite.name= "Senhor dos Orcs | Arredores de Geffen (10)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "SER01";
mapSprite.src = "images/gon_dun03.png";
mapSprite.name= "Serpente Suprema | Terra das Fadas"
mapSprite.tempo= 94;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "TG01";
mapSprite.src = "images/beach_dun.png";
mapSprite.name= "Tao Gunka | Karu, a Caverna do Oeste"
mapSprite.tempo= 300;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "VAL01";
mapSprite.src = "images/odin_tem03.png";
mapSprite.name= "Valquíria Randgris | Santuário de Odin"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "VES01";
mapSprite.src = "images/jupe_core.png";
mapSprite.name= "Vesper | Centro de Juperos"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSpriteAtual = Mapas[0];

for (var cont = 0; cont<Mapas.length; cont++){
        var mapSprite = new Image();
        mapSprite = Mapas[cont];
        var result = getCookie(mapSprite.id);
        
        if (result){
        var res = result.split("☼");
        var tempMarker = new Marker();
        tempMarker.XPos = res[2];
        tempMarker.YPos = res[3];
        tempMarker.minutos = res[1];
        tempMarker.horas = res[0];
        tempMarker.where = res[4];
        tempMarker.XTooltip = res[5];
        tempMarker.YTooltip = res[6];
        tempMarker.idMarker = mapSprite.id;
        Markers.push(tempMarker);
        }
}

atualizarMap(mapSpriteAtual.id);

}

var atualizarMap = function(idvalor)
{
for (var i = 0; i< Mapas.length; i++){
	if (Mapas[i].id == idvalor){
    mapSpriteAtual = new Marker();
	mapSpriteAtual = Mapas[i];
	}
}

$('#popup').hide();
$('#horas').val("");
$('#minutos').val("");



for (var i = 0; i < Markers.length; i++) {
    if (Markers[i].idMarker == mapSpriteAtual.id){
        $('#horas').val(Markers[i].horas);
        $('#minutos').val(Markers[i].minutos);
		$('#where').val(Markers[i].where);
    }
}

}

//function responsável por carregar os MVPs e seus mapas em uma dropdown list
var listarMVP = function() {
var select = document.getElementById("selectMVP"); 
	for(var i = 0; i < Mapas.length; i++) {
    var opt = Mapas[i];
    var el = document.createElement("option");
    el.textContent = Mapas[i].name;
    el.value = Mapas[i].id;
	select.appendChild(el);
	}
};
// ação de clicar no mapa
var mouseClicked = function (mouse) {

    //pega as coordenadas
    var rect = canvas.getBoundingClientRect();
    var mouseXPos = (mouse.x - rect.left);
    var mouseYPos = (mouse.y - rect.top);

    //posiciona o marcador
    var marker = new Marker();
    marker.XPos = mouseXPos - (marker.Width / 2);
    marker.YPos = mouseYPos - marker.Height;
    marker.XTooltip = mouse.x;
    marker.YTooltip = mouse.y;
    marker.idMarker = mapSpriteAtual.id;

	var testeExiste = false;
	for (var i = 0; i < Markers.length; i++) {
	if (Markers[i].idMarker == marker.idMarker){
    marker.minutos = Markers[i].minutos;
    marker.horas = Markers[i].horas;
    marker.where = Markers[i].where;
    //Markers[i] = marker;
    //tempMarker = marker;
	testeExiste = true;
	alert('Já existia!');
    }
	}
	
	if (testeExiste == false){
	Markers.push(marker);
	alert('Dei um push!');
	}
}

// Add mouse click event listener to canvas
canvas.addEventListener("mousedown", mouseClicked, false);

// Run this once so we setup text rendering
var firstLoad = function () {
    context.font = "15px Georgia";
    context.textAlign = "center";
	carregar();
	listarMVP();
}

firstLoad();

// This will be called 60 times a second, look at the code at the bottom `setInterval`
var main = function () {
    // Update our canvas
    draw();
};

var draw = function () {
    // Clear Canvas
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw map
    // Sprite, X location, Y location, Image width, Image height
    // You can leave the image height and width off, if you do it will draw the image at default size
    context.drawImage(mapSpriteAtual, 0, 0, 500, 500);

    // Adicionar o marcador atual
    for (var i = 0; i < Markers.length; i++) {
		if (Markers[i].idMarker == mapSpriteAtual.id){
        var tempMarker = new Marker();
		tempMarker = Markers[i];
        // Draw marker
        context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos + 10, tempMarker.Width, tempMarker.Height);

        //alert(tempMarker.XPos + "" + tempMarker.Sprite.src);
        // Calculate position text
        /*  var markerText = "Coordenadas (" + tempMarker.XPos + ", " + Math.round(tempMarker.YPos) +")";

        // Draw a simple box so you can see the position
       var textMeasurements = context.measureText(markerText);
        context.fillStyle = "#fff";
        context.globalAlpha = 0.7;
        context.fillRect(tempMarker.XPos - (textMeasurements.width / 2), tempMarker.YPos - 15, textMeasurements.width, 20);
        context.globalAlpha = 1;

         Draw position above
        context.fillStyle = "#000";
        context.fillText(markerText, Math.floor(tempMarker.XPos), Math.round(tempMarker.YPos)); */
		
        $('#popup').show("slow");
        $('#popup').css('top', (tempMarker.YTooltip+10)+"px");
        $('#popup').css('left', (tempMarker.XTooltip+10)+"px");
        $('#xpos').text(tempMarker.XPos);
        $('#ypos').text(tempMarker.YPos);
        $('#source').text(tempMarker.Sprite.src);
		}
	}
};

var gravar = function (){
    tempMarker.minutos = $('#minutos').val();
    tempMarker.horas = $('#horas').val();
	setCookie(mapSpriteAtual.id, tempMarker.horas+"☼"+tempMarker.minutos+"☼"+tempMarker.XPos+"☼"+tempMarker.YPos+"☼"+$('#where').val()+"☼"+tempMarker.XTooltip+"☼"+tempMarker.YTooltip, 7);
    ler();
}

var ler = function(){
 var name = mapSpriteAtual.id;
 var result = getCookie(name);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

setInterval(main, (1000 / 60)); // Refresh 60 times a second