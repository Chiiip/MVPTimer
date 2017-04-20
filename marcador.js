var canvas = document.getElementById('Canvas');
var context = canvas.getContext("2d");
var mapSpriteAtual = "";
//criando os mapsprites do jogo

var Mapas = new Array();

// Create a basic class which will be used to create a marker
var Marker = function () {
    this.Sprite = new Image();
    this.Sprite.src = "http://www.clker.com/cliparts/w/O/e/P/x/i/map-marker-hi.png"
    this.Width = 12;
    this.Height = 20;
    this.XPos = 0;
    this.YPos = 0;
	this.Map = mapSpriteAtual.id;
	this.Atual = true;
}

var carregar = function ()
{
var mapSprite = new Image();
mapSprite.id = "GTB01";
mapSprite.src = "images/prt_sewb4.png";
mapSprite.name= "Besouro-Ladrão Dourado (Esgotos de Prontera 04)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MIS01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Abelha-Rainha (Monte Mjolnir (04))"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "OH01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Orc Herói (Arredores de Geffen (03))"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MAY01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Maya (Formigueiro Infernal)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MAY02";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Maya (Calabouço de Britoniah)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MAY03";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Maya (Calabouço de Britoniah)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "OL01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Senhor dos Orcs (Vila dos Orcs)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "EDD01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Eddga (Floresta de Payon)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "EDD02";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Eddga (Calabouço de Payon)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "EDD03";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Eddga (Calabouço de Payon 2)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "OSI01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Osíris (Pirâmide de Morroc)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "AMO01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Amon Ra (Pirâmide de Morroc)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "FRE01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Freeoni (Deserto Sograt)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DRA01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Drácula (Torre de Geffen)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DOP01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Doppelganger (Torre de Geffen)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DOP02";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Doppelganger (Calabouço de Geffen)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DOP03";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Doppelganger (Calabouço de Geffen 2)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MIS02";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Abelha-Rainha (Calabouço de Prontera)"
mapSprite.tempo= 480;
Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MOO01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Flor do Luar (Calabouço de Payon)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MOO02";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Flor do Luar (Caverna de Payon)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "TAN01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Lady Tanee (Ayothaya)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BAF01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Bafomé (Labirinto da Floresta)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BAF02";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Bafomé (Calabouço de Prontera)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "FAR01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Faraó (Esfinge)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DRA01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Drake (Navio Fantasma)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "STO01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Cavaleiro da Tempestade (Fábrica de Brinquedos)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BOI01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Boitatá (Esgotos de Brasilis)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "LEA01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Leak (Vulcão Jaty)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MOR01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Senhor dos Mortos (Nifflheim)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DL01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Senhor das Trevas (Catedral de Glast Heim)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DL02";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Senhor das Trevas (Calabouço de Geffen 01)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DL03";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Senhor das Trevas (Calabouço de Geffen 02)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "GOR01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Gorynych (Calabouço de Moscóvia)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BAC01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Lady Branca (Calabouço de Louyang)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "HAT01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Hatii (Campos de Lutie)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "RSX01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "RSX-0806 (Mina de Einbech)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "INC01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Samurai Encarnado (Labirinto de Tatames)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "SER01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Serpente Suprema (Terra das Fadas)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "TG01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Tao Gunka(A caverna do Oeste)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "GT01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "General Tartaruga (Ilha das Tartarugas)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "ATR01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Atroce (Planície de Ida)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "ATR02";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Atroce (Planície de Ida)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "ATR03";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Atroce (Planície de Ida)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "ATR04";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Atroce (Planície de Ida)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "ATR05";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Atroce (Calabouço de Rachel)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "KRA01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Kraken (Caverna de Byalan)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "KIE01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Kiel-D-01 (Kiel Hyre)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "VES01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Vesper (Juperos)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "DET01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Detardeurus (Lago do Abismo)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BIS01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Bispo Decadente (Monastério)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "PES01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Pesar Noturno (Santuário de Rachel)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "SCA01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Rainha Scaraba (Tunel Kamidal)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "SCA02";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Rainha Scaraba Dourada (Túnel Kamidal Pesadelo)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "AMO02";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Amon Ra Pesadelo(Pirâmide)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "EGN01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Egnigem Cenia (Laboratório de Somatologia)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "VAL01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Valquíria Randgris (Templo de Odin)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "PYU01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Pyuriel Furiosa (Planície de Ida)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "GEN01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "General Daehyon (Planície de Ida)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "KAD01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Guardião Morto Kades(Planície de Ida)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "GIO01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Gioia (Planície de Ida)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "IFR01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Ifrit (Vulcão de Thor)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "BEL01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Belzebu (Monastério)"

Mapas.push(mapSprite);

var mapSprite = new Image();
mapSprite.id = "MOC01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Morroc Ferido (Fenda Dimensional)"

Mapas.push(mapSprite);

mapSpriteAtual = Mapas[0];
}

var atualizarMap = function(idvalor)
{
for (var i = 0; i< Mapas.length; i++){
	if (Mapas[i].id == idvalor){
	mapSpriteAtual = Mapas[i];
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
	}/**/};

// marcadores sendo guardados em um vetor
var Markers = new Array();

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

	//torna os marcadores já existentes no vetor de marcadores como não-atuais
	for (var i = 0; i < Markers.length; i++) {
	Markers[i].Atual = false;
	}
	
	//adiciona o marcador atual para o array de marcadores
    Markers.push(marker);
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
    context.drawImage(mapSpriteAtual, 0, 0, 300, 300);

    // Adicionar o marcador atual
    for (var i = 0; i < Markers.length; i++) {
		if (Markers[i].Atual == true){
        var tempMarker = Markers[i];
        // Draw marker
        context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);

        // Calculate position text
        var markerText = "Coordenadas (" + tempMarker.XPos + ", " + Math.round(tempMarker.YPos) +")";

        // Draw a simple box so you can see the position
        var textMeasurements = context.measureText(markerText);
        context.fillStyle = "#666";
        context.globalAlpha = 0.7;
        context.fillRect(tempMarker.XPos - (textMeasurements.width / 2), tempMarker.YPos - 15, textMeasurements.width, 20);
        context.globalAlpha = 1;

        // Draw position above
        context.fillStyle = "#000";
        context.fillText(markerText, Math.floor(tempMarker.XPos), Math.round(tempMarker.YPos));
		}
	}
};

setInterval(main, (1000 / 60)); // Refresh 60 times a second