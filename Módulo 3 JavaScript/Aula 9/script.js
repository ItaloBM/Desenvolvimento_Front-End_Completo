// EXEMPLO 1

// Inicializando a variavel de soma
//let total = 0;

// Inicializando a variavel de limite
//let j = 1;

// Enquanto j for menor ou igual a 10, faça:
//while(j <= 10){
//    total = total + 1
//    console.log("Iteracao", total)
//    j++;
//}

// EXEMPLO 2

let vidas = 100;
let colidindo = true;

while(colidindo){
    vidas -= 1;
    console.log(vidas);
    if(vidas == 0){
        break;
    }
}