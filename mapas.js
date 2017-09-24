var Mapas = new Array();
var mapSprite = new Image();
var Marker = function () {
    this.Width = 30;
    this.Height = 30;
    this.XPos = 0;
    this.YPos = 0;
	this.show = false;
	this.horas = "";
	this.minutos = "";
	this.where = "";
    this.XTooltip = "";
    this.YTooltip = "";
    this.date = null;
    this.morreuOntem = false;
}
mapSprite.id = "MIS01";
mapSprite.src = "images/mjolnir_04.png";
mapSprite.name= "Abelha-Rainha | Monte Mjolnir (04)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "MIS02";
mapSprite.src = "images/gld_dun02.png";
mapSprite.name= "Abelha-Rainha | Calabouço do Feudo de Luina"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "AMO01";
mapSprite.src = "images/moc_pryd06.png";
mapSprite.name= "Amon Ra | Dentro da Pirâmide (6)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "AMO02";
mapSprite.src = "images/moc_pryd06.png";
mapSprite.name= "Amon Ra Pesadelo | Base da Pirâmide 02 - Pesadelo"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "ATR01";
mapSprite.src = "images/ra_fild03.png";
mapSprite.name= "Atroce | Planície de Ida (03)"
mapSprite.tempo= 180;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "ATR02";
mapSprite.src = "images/ra_fild04.png";
mapSprite.name= "Atroce | Planície de Ida (04)"
mapSprite.tempo= 300;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "ATR03";
mapSprite.src = "images/ve_fild01.png";
mapSprite.name= "Atroce | Campo de Veins (01)"
mapSprite.tempo= 180;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "ATR04";
mapSprite.src = "images/ve_fild02.png";
mapSprite.name= "Atroce | Campo de Veins (02)"
mapSprite.tempo= 360;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "ATR05";
mapSprite.src = "images/gld_dun03.png";
mapSprite.name= "Atroce | 2º Calabouço da Guilda"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "BAF01";
mapSprite.src = "images/prt_maze03.png";
mapSprite.name= "Bafomé | Labirinto da Floresta (3)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "BAF02";
mapSprite.src = "images/gld_dun03.png";
mapSprite.name= "Bafomé | Calabouço do Feudo das Valquírias"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "BEL01";
mapSprite.src = "images/abbey03.png";
mapSprite.name= "Belzebu | Monastério"
mapSprite.tempo= 720;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "GTB01";
mapSprite.src = "images/prt_sewb4.png";
mapSprite.name= "Besouro-Ladrão Dourado | Esgotos de Prontera (4)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "BIS01";
mapSprite.src = "images/abbey02.png";
mapSprite.name= "Bispo Decadente | Monastério"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "BOI01";
mapSprite.src = "images/bra_dun02.png";
mapSprite.name= "Boitatá | Profundezas das Cataratas"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "STO01";
mapSprite.src = "images/xmas_dun02.png";
mapSprite.name= "Cavaleiro da Tempestade | Sala de Construção de Brinquedos"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "DET01";
mapSprite.src = "images/abyss_03.png";
mapSprite.name= "Detardeurus | Caverna Subterrânea do Lago do Abismo"
mapSprite.tempo= 180;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "DOP01";
mapSprite.src = "images/gef_dun02.png";
mapSprite.name= "Doppelganger | Geffenia (1)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "DOP02";
mapSprite.src = "images/gld_dun02.png";
mapSprite.name= "Doppelganger | Calabouço do Feudo de Luina"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "DOP03";
mapSprite.src = "images/gld_dun04.png";
mapSprite.name= "Doppelganger | Calabouço do Feudo de Britoniah"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "DRAC01";
mapSprite.src = "images/gef_dun01.png";
mapSprite.name= "Drácula | Calabouço de Geffen (2)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "DRA01";
mapSprite.src = "images/treasure02.png";
mapSprite.name= "Drake | Navio Fantasma (2)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "EDD01";
mapSprite.src = "images/pay_fild10.png";
mapSprite.name= "Eddga | Floresta de Payon (10)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "EDD02";
mapSprite.src = "images/gld_dun01.png";
mapSprite.name= "Eddga | Calabouço do Feudo do Bosque Celestial"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "EDD03";
mapSprite.src = "images/gld_dun01.png";
mapSprite.name= "Eddga | 2º Calabouço da Guilda"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "EGN01";
mapSprite.src = "images/lhz_dun02.png";
mapSprite.name= "Egnigem Cenia | Laboratório de Somatologia"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "FAR01";
mapSprite.src = "images/in_sphinx5.png";
mapSprite.name= "Faraó | Esfinge (5)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "MOO01";
mapSprite.src = "images/pay_dun04.png";
mapSprite.name= "Flor do Luar | Caverna de Payon (4)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "MOO02";
mapSprite.src = "images/gld_dun01.png";
mapSprite.name= "Flor do Luar | Calabouço do Feudo do Bosque Celestial"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "FRE01";
mapSprite.src = "images/moc_fild17.png";
mapSprite.name= "Freeoni | Deserto Sograt (17)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "GEN01";
mapSprite.src = "images/gld2_pay.png";
mapSprite.name= "General Daehyon | Portal do Abismo: Ventos Ancestrais"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "GT01";
mapSprite.src = "images/tur_dun04.png";
mapSprite.name= "General Tartaruga | Palácio da Ilha da Tartaruga"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "GIO01";
mapSprite.src = "images/gld2_ald.png";
mapSprite.name= "Gioia | Portal do Abismo: Lágrimas do Herói"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "GOR01";
mapSprite.src = "images/mosk_dun03.png";
mapSprite.name= "Gorynych | Floresta Encantada 3"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "KAD01";
mapSprite.src = "images/gld2_gef.png";
mapSprite.name= "Guardião Morto Kades | Portal do Abismo: Colina dos Mortos"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "HAT01";
mapSprite.src = "images/xmas_fild01.png";
mapSprite.name= "Hatii | Arredores de Lutie"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "IFR01";
mapSprite.src = "images/thor_v03.png";
mapSprite.name= "Ifrit | Vulcão de Thor"
mapSprite.tempo= 660;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "KIE01";
mapSprite.src = "images/kh_dun02.png";
mapSprite.name= "Kiel-D-01 | Fábrica de Robôs - Nível 2"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "KRA01";
mapSprite.src = "images/iz_dun05.png";
mapSprite.name= "Kraken | Túnel Submarino (6)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "BAC01";
mapSprite.src = "images/lou_dun03.png";
mapSprite.name= "Lady Branca | Suei Long Gon"
mapSprite.tempo= 116;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "TAN01";
mapSprite.src = "images/ayo_dun02.png";
mapSprite.name= "Lady Tanee | Interior do Santuário Ancestral"
mapSprite.tempo= 420;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "LEA01";
mapSprite.src = "images/dew_dun01.png";
mapSprite.name= "Leak | Vulcão Krakatau"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "MAY01";
mapSprite.src = "images/anthell02.png";
mapSprite.name= "Maya | Formigueiro Infernal (2)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "MAY02";
mapSprite.src = "images/gld_dun03.png";
mapSprite.name= "Maya | Calabouço do Feudo das Valquírias"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "MAY03";
mapSprite.src = "images/gld_dun02.png";
mapSprite.name= "Maya | 2º Calabouço da Guilda"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "MOC01";
mapSprite.src = "images/moc_fild22.png";
mapSprite.name= "Morroc Ferido | Ruptura Dimensional"
mapSprite.tempo= 720;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "OH01";
mapSprite.src = "images/gef_fild03.png";
mapSprite.name= "Orc Herói | Arredores de Geffen (03)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "OSI01";
mapSprite.src = "images/moc_pryd04.png";
mapSprite.name= "Osíris | Dentro da Pirâmide (4)"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "PES01";
mapSprite.src = "images/ra_san05.png";
mapSprite.name= "Pesar Noturno | Santuário"
mapSprite.tempo= 300;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "PYU01";
mapSprite.src = "images/gld2_prt.png";
mapSprite.name= "Pyuriel Furiosa | Portal do Abismo: Caminho do Guerreiro"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "SCA01";
mapSprite.src = "images/dic_dun02.png";
mapSprite.name= "Rainha Scaraba | Túnel Kamidal 02"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "SCA02";
mapSprite.src = "images/dic_dun02.png";
mapSprite.name= "Rainha Scaraba Dourada | Túnel Kamidal - Pesadelo"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "RSX01";
mapSprite.src = "images/ein_dun02.png";
mapSprite.name= "RSX-0806 | Calabouço da Mina"
mapSprite.tempo= 125;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "INC01";
mapSprite.src = "images/ama_dun03.png";
mapSprite.name= "Samurai Encarnado | Templo Subterrâneo de Amatsu"
mapSprite.tempo= 91;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "DL01";
mapSprite.src = "images/gl_chyard.png";
mapSprite.name= "Senhor das Trevas | Cemitério de Glast Heim"
mapSprite.tempo= 60;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "DL02";
mapSprite.src = "images/gld_dun04.png";
mapSprite.name= "Senhor das Trevas | Calabouço do Feudo de Britoniah"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "DL03";
mapSprite.src = "images/gld_dun04.png";
mapSprite.name= "Senhor das Trevas | 2º Calabouço da Guilda"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "MOR01";
mapSprite.src = "images/niflheim.png";
mapSprite.name= "Senhor dos Mortos | Nifflheim, O reino dos mortos"
mapSprite.tempo= 133;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "OL01";
mapSprite.src = "images/gef_fild10.png";
mapSprite.name= "Senhor dos Orcs | Arredores de Geffen (10)"
mapSprite.tempo= 120;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "SER01";
mapSprite.src = "images/gon_dun03.png";
mapSprite.name= "Serpente Suprema | Terra das Fadas"
mapSprite.tempo= 94;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "TG01";
mapSprite.src = "images/beach_dun.png";
mapSprite.name= "Tao Gunka | Karu, a Caverna do Oeste"
mapSprite.tempo= 300;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "VAL01";
mapSprite.src = "images/odin_tem03.png";
mapSprite.name= "Valquíria Randgris | Santuário de Odin"
mapSprite.tempo= 480;

Mapas.push(mapSprite);

mapSprite = new Image();
mapSprite.id = "VES01";
mapSprite.src = "images/jupe_core.png";
mapSprite.name= "Vesper | Centro de Juperos"
mapSprite.tempo= 120;

Mapas.push(mapSprite);