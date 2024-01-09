// Operações com Arrays

let notas = [40, 20, 50, 43, 23, 56, 22, 34, 43, 44];
console.log("Notas antes da correcao: ", notas)
// Usando um loop para percorrer todo o array

// EXEMPLO 1 WHILE

// let i = 0
// while(i < notas.length){
//    notas[i] += 20
//    i++
//}

// EXEMPLO 2 FOR

//for(let i = 0; i < notas.length; i++){
//    notas[i] += 20
//}

// EXEMPLO 3 FOR EACH

notas.forEach(function(entry, index, scores){
    notas[index] += 20
})
console.log("Notas depois da correcao: ", notas);