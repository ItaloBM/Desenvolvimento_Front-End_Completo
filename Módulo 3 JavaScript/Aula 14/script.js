// Arrays BIDIMENSIONAIS

let estado = [['parado', 'pulo'],
                ['esquerda', 'direita']];

console.log(estado);

// Acessando a posição pulo
console.log(estado[0][1]);

// Acessando a posição direita
console.log(estado[1][1]);

// Mudando o primeiro elemento da primeira linha
estado[0][0] = 'qualquer coisa'
console.log(estado)

// Apagando a 2º linha
estado.pop()
console.log(estado)

// Adcionando novo elemento
estado.push('Italo')
console.log(estado)