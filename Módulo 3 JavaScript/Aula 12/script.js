// Arrays

let estado = ['ganhou', 'andando', 'correndo', 'parado'];
let notas = [10, 20, 30, 40]
let bl = [true, true, false]

// Mostrando o Array
console.log("Array: ", estado);
// Mostrando o tamanho do Array
console.log("Tamanho: ", estado.length);

// Mostrando o primeiro elemento do Array
console.log("Primeiro elemento: ", estado[0]);
// Mostrando o último elemento do Array
console.log("Ultimo elemento: ", estado[estado.length-1]);

// Mudando o elemento de posição dentro do Array
estado[estado.length-1] = 'andando';
// Mostrando a nova posição do elemento no Array
console.log("Ultimo elemento novo: ", estado[estado.length-1]);

// Adcionando elemento novo ao Array(final)
estado.push('elemento novo');
// Mostrando o novo elemento no Array
console.log(estado);

// Deletando o último elemento do Array
estado.pop();
// Mostrando o Array sem o elemento deletado
console.log(estado);
