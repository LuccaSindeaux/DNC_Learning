//Funções de tempo e setando intervalos 

function iniciarContador(tempo){
    let segundosRestantes = tempo;

    const atualizarContador = setInterval(function() {
        console.log(segundosRestantes)
        if (segundosRestantes === 0) {
            clearInterval(atualizarContador);
        } else {
            segundosRestantes --;
        }
    }, 1000)
}

iniciarContador(5)