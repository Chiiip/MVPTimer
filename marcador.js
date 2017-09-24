const canvas = document.getElementById('Canvas');
var context = canvas.getContext("2d");
var mapSpriteAtual = new Image();
var tempMarker = new Marker();
var spriteTomb = new Image();
var config;
spriteTomb.src = "images/tumulo.png";

function atualizarMap(idvalor) {
    var mapasFiltered = Mapas.filter(element => element.id == idvalor);
    mapSpriteAtual = mapasFiltered[0];
    $('#popup').hide();
    setFields(mapSpriteAtual.marker);
    draw();
    returnHoraNascer(mapSpriteAtual);
}

function carregar() {
    Mapas.forEach(element => {
        var mapSprite = new Image();
        mapSprite = element;
        element.marker = findMarker(element.id);
        if (element.marker == null) {
            element.marker = new Marker();
        }
    });
}

function listMVP() {
    var select = document.getElementById("selectMVP");
    Mapas.forEach(element => {
        var opt = element;
        var el = document.createElement("option");
        el.textContent = element.name;
        el.value = element.id;
        select.appendChild(el);
    });
}

function mouseClicked(mouse) {
    //pega as coordenadas
    var rect = canvas.getBoundingClientRect();
    var mouseXPos = (mouse.x - rect.left);
    var mouseYPos = (mouse.y - rect.top);

    //posiciona o marcador
    mapSpriteAtual.marker.XPos = mouseXPos - (mapSpriteAtual.marker.Width / 2);
    mapSpriteAtual.marker.YPos = mouseYPos - mapSpriteAtual.marker.Height + 10;
    mapSpriteAtual.marker.XTooltip = mouse.x;
    mapSpriteAtual.marker.YTooltip = mouse.y;
    mapSpriteAtual.marker.show = true;
    draw();
}

canvas.addEventListener("mousedown", mouseClicked, false);

function firstLoad() {
    //context.font = "15px Georgia";
    //context.textAlign = "center";
    checkConfig();
    carregar();
    mapSpriteAtual = Mapas[0];
    atualizarMap(mapSpriteAtual.id);
    listMVP();
    draw();
}

function draw() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(mapSpriteAtual, 0, 0, 500, 500);

    if (mapSpriteAtual.marker.show == true) {
        tempMarker = mapSpriteAtual.marker;
        context.drawImage(spriteTomb, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);
        $('#popup').show("slow");
        setFields(tempMarker);
        $('#popup').css('top', tempMarker.YTooltip + 10 + "px");
        $('#popup').css('left', tempMarker.XTooltip + 10 + "px");
    }

}

function save() {
    tempMarker.minutos = $('#minutos').val();
    tempMarker.horas = $('#horas').val();
    tempMarker.where = $('#where').val();
    tempMarker.morreuOntem = $('#morreuOntem').is(':checked');
    tempMarker.date = new Date();
    const tempMarkerJSON = JSON.stringify(tempMarker);
    localStorage.setItem(mapSpriteAtual.id, tempMarkerJSON);
    carregar();
    buildTableMarcadores(Mapas);
}

function findMarker(id) {
    return JSON.parse(localStorage.getItem(id));
}

function storeMarker(mapa) {
    localStorage.setItem(mapa.id, JSON.stringify(mapa.marker));
}

function setFields(tempMarker) {
    $('#horas').val(tempMarker.horas);
    $('#minutos').val(tempMarker.minutos);
    $('#where').val(tempMarker.where);
    $('#morreuOntem').prop('checked', tempMarker.morreuOntem);
}

function returnHoraNascer(mapa) {
    const date = new Date();
    if (mapa.marker.morreuOntem) {
        date.setTime(date.getTime() - 24 * 60 * 60000);
    }
    date.setHours(mapa.marker.horas);
    date.setMinutes(mapa.marker.minutos);
    const dataNova = new Date(date.getTime() + mapa.tempo*60000);
    return dataNova;
}

function buildTableMarcadores(Mapas) {
    $('#divTabela').empty();
    let table = '<table class="tabela table-striped table-condensed table-responsive"<tbody><tr><th>MVP</th><th>Hora da Morte</th><th>Coordenadas</th><th>Nasce</th><th>Ação</th></tr>';
    let marcadoresAdicionar = getMarcadoresAdicionar(Mapas);
    if (marcadoresAdicionar.length == 0) {
        table += '<tr><td colspan="5">Nenhum registro encontrado!</td></tr></tbody</table>'
    } else {
        marcadoresAdicionar.sort(function(a,b){return new Date(a.marker.horaNascer) - new Date(b.marker.horaNascer)});
        marcadoresAdicionar.forEach(marcador => {
        let vaiNascer = false;
        if ( (marcador.marker.horaNascer.getTime() <= new Date().getTime() && (new Date().getTime() - marcador.marker.horaNascer.getTime()) <= 60*60000)
         || marcador.marker.horaNascer.getTime() >= new Date() || !config.dontShowOld) {
        
        if (marcador.marker.horaNascer.getTime() - new Date().getTime() <= 15*60000 || 
        marcador.marker.horaNascer.getTime() <= new Date().getTime()) {
            vaiNascer = true;
        }

        if (marcador.marker.horaNascer.getHours() == new Date().getHours() && marcador.marker.horaNascer.getMinutes() == new Date().getMinutes()) {
            emitNotificacao();  
        }

        let a = '<tr><td>' + marcador.name + '</td><td>';
        a += (parseInt(marcador.marker.horas) >= 10 ? parseInt(marcador.marker.horas) : '0' + parseInt(marcador.marker.horas));
        a += ':' + (parseInt(marcador.marker.minutos) >= 10 ? parseInt(marcador.marker.minutos) :'0' + parseInt(marcador.marker.minutos))+ '</td>';
        a += '<td>' + (marcador.marker.where != '' ? marcador.marker.where : 'Não informado') + '</td>';
        a += '<td class="' + (vaiNascer == true ? 'vaiNascer' : '') + '">' + hourToString(marcador.marker.horaNascer) + '</td>';
        a += '<td><button onclick="deleteMarker(\'' + marcador.id + '\')">Deletar</button></td>'
        // a += '<td><button onclick="updateMarker(\'' + marcador.id + '\')">Atualizar</button></td>'
        table += a; 
        }
    });
    table += '</tbody></table>';
    }
$(table).appendTo('#divTabela');
    
}

function deleteMarker(id) {
    localStorage.removeItem(id);
    carregar();
    buildTableMarcadores(Mapas);
}

function updateMarker(id) {
    let mapa = findMarker(id);
    mapa.marker.horas = (new Date()).getHours();
    mapa.marker.minutos = (new Date()).getMinutes();
}

function hourToString(hora) {
    return (hora.getHours() >= 10 ? hora.getHours() : '0' + hora.getHours()) + ':' + 
    (hora.getMinutes() >= 10 ? hora.getMinutes() : '0' + hora.getMinutes()) + ( (hora.getTime() > (new Date()).getTime() 
    && hora.getDate()  > (new Date()).getDate()) ? ' (Amanhã)' : '' ) + ( (hora.getTime() < (new Date()).getTime() 
    && hora.getDate()  < (new Date()).getDate()) ? ' (' + hora.getDate() + '/' + (hora.getMonth() > 8 ? hora.getMonth()+1 : '0' + (hora.getMonth()+1)) + ')' : '' );
}

function bodyLoaded() {
    buildTableMarcadores(Mapas);
    draw();
    $('#notification').prop('checked', config.notification);
    $('#eventosOld').prop('checked', config.dontShowOld);
}

function emitNotificacao() {
    if (config.notification) {
        var audio = new Audio('Notification.mp3');
            audio.play();
        }
}

function updatePage() {
    buildTableMarcadores(Mapas);
}

function checkConfig() {
    config = findMarker('config');
    if (config == null) {
        localStorage.setItem('config', JSON.stringify({notification: true, dontShowOld: true}));
    }
}

function getMarcadoresAdicionar(Mapas) {
    let marcadoresAdicionar = new Array();
    Mapas.forEach(mapa => {
        if (mapa.marker.show) {
            mapa.marker.horaNascer = returnHoraNascer(mapa);
            marcadoresAdicionar.push(mapa);
        }
    });
    return marcadoresAdicionar;
}

function saveConfig () {
    config.dontShowOld = ($('#eventosOld').is(':checked'));
    config.notification = ($('#notification').is(':checked'));
    localStorage.setItem('config', JSON.stringify(config));
}

firstLoad();
setInterval(updatePage, 60000);