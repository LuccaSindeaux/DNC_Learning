console.log("Buscar dados de ums ervidor...");
let promessaBusca = new Promise((resolve, reject) =>{
    console.log("Iniciando busca de dados no servidor...");

    setTimeout(() => {
        let sucesso = true;
        if (sucesso) resolve ({Name: 'Lucca', age:27})
            else reject('Opa, aconteceu um erro no servdir, dados não encontrados')
    }, 5000) //5000 porque está em milisegundos
})

console.log("Vida que segue, to fazendo outra coisa enquanto espero.")


//verficação de se a função deu ceerto, neste caso, se sucesso é true, caso não fosse, o catch pegaria o erro
promessaBusca
.then(console.log)
.catch(console.log)