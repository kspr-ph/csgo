function atualizarDataHora() {
    var dataHoraAtual = new Date();

    var dia = dataHoraAtual.getDate();
    var mes = dataHoraAtual.getMonth() + 1;
    var ano = dataHoraAtual.getFullYear();

    var hora = dataHoraAtual.getHours();
    var minutos = dataHoraAtual.getMinutes();
    var segundos = dataHoraAtual.getSeconds();

    var dataHoraFormatada = dia + "/" + mes + "/" + ano + " | " + hora + ":" + minutos + ":" + segundos;

dataHoraElemento.textContent = dataHoraFormatada;
}

setInterval(atualizarDataHora, 1000);
 var dataHoraElemento = document.getElementById("data-hora");
