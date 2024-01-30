//Irá pegar no elemento o de acordo com o Id
const botaoCapiuloAnterior = document.getElementById('anterior');
const botaoPlayPause = document.getElementById('play-pause');
const botaoProximoCapitulo = document.getElementById('proximo');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

const Capitulos = 10; //const não é possível mudar
let estaTocando = 0; //let é possível mudar
let capituloAtual = 1;

function tocarAudio() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}
function pausarAudio() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

//Função que definará se deve pausar ou tocar
function TocarOuPausar() {
    if (estaTocando === 0) {
       tocarAudio(); 
       estaTocando = 1;
    } else {
       pausarAudio();
       estaTocando = 0; 
    }
}

function trocarNomeCapitulo() {
    //Texto interior, aonde está "Capítulo 1"
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}
function proximoCapitulo() {
    if (capituloAtual === Capitulos){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarAudio();
    taTocando = 1;
    trocarNomeCapitulo();
}

function capituloAnterior() {
    if (capituloAtual === 1){
        capituloAtual = Capitulos;
    } else {
         capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"; 
    tocarAudio();
    taTocando = 1;
    trocarNomeCapitulo();
}

//Quando for clicado, deve responder a função
botaoCapiuloAnterior.addEventListener('click', capituloAnterior);
botaoPlayPause.addEventListener('click', TocarOuPausar);
botaoProximoCapitulo.addEventListener('click', proximoCapitulo);