// Campo Minado

// Letra a)
cm = [[0,0,0,0],[1,0,0,0],[0,1,0,0],[1,1,1,1]]
console.log(cm)

// Letra b)
let jogada1 = cm[0][0]
console.log(cm[0][0])

let jogada2 = cm[1][0]

let jogada3 = cm[0][1]

// Letra c)
jogadas = []
jogadas.push(jogada1)
jogadas.push(jogada2)
jogadas.push(jogada3)
console.log(jogadas)

// Letra d)
for(let i=0; i<jogadas.length; i++){
    if(jogadas[i] == 1){
        alert("Voce perdeu!")
    }
    else if(i == jogadas.length-1){
        alert("Voce venceu!")
    }
}