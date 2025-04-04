//ASYNC marca uma função com uma promessa como assincrona, o AWAIT executa o programa somente depois de resolver o async

const confirmarPedido = async () => new Promise((resolve, reject) => {
    console.log('Inicinado pedido online.');

    setTimeout(() => {
        let sucesso = true;
        if (sucesso) {
            console.log('Pedido confirmado com sucesso.');
            resolve({id:1, confirmation: true, payment: 'AWAITING'})
        } 
        else{
            reject('Pedido não pode ser confirmado, tente novamente.')
        }
    }, 5000);
});

let processarPagamento = async(pedido) => new Promise((resolve, reject) => {
    console.log('Aguardando pagamento ser aprovado.');

    setTimeout(() => {
        let pagamentoAprovado = true;
        if (pagamentoAprovado) {
            console.log('Pagamento aprovado com sucesso.');
            resolve({confirmation: true, payment: 'APPROVED'})
        } else {
            reject('ocorreu um erro no pagamento, cancelando pedido.')
        }
    }, 5000);
}) ;


//Tratamento de erros: uso de try catch ---> se der certo, será pego no try, caso de errado (reject) será pego no catch

try {
    const pedidoConfirmado = await confirmarPedido();
    const pagamentoAprovado = await processarPagamento(pedidoConfirmado);
    console.log('Tudo certo no seu pedido, aguardando envio.');
} catch (error) {
    console.log(error);
}
