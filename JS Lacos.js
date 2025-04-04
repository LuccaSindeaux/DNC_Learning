//Laços e Iterações

// for (declaracao e inicializacao; condicao; incremento){
//     //Código que será repetido pelo número de incrementos
// }

for (let i=0; i<=10; i++){
    console.log(i); //printa o i
}


//WHILE

let isCorrect = false;
let seelectedNumber = Math.floor(Math.random() * 10 + 1); 
//Math é uma biblioteca, floor pega numeros positicos, random *10 pega os dez primeiros numeros disponiveis randons, o +1 é porqiue zero é considerado número. 
//construindo um while que advinha um número random 

console.log(seelectedNumber);
while (!isCorrect){
    let guess = prompt("Digite um número de 1 a 10");
    
    if (guess === seelectedNumber) isCorrect = true;
}