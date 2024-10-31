var Leonardo = window.document.getElementById('leo')
var Bruna = window.document.getElementById('bruna')
var Samantha = window.document.getElementById('samantha')
var SetaDireita = window.document.getElementById('setadireita')
var SetaEsquerda = window.document.getElementById('setaesquerda')

function RolarDireita(){
    Bruna.style="display:none"
    Samantha.style="display:flex"
    SetaEsquerda.style="display:flex; margin-top:65px"
    SetaDireita.style="display:none"
}

function RolarEsquerda(){
    Samantha.style="display:none"
    Bruna.style="display: flex"
    SetaEsquerda.style="display:none"
    SetaDireita.style="display:flex"
}
