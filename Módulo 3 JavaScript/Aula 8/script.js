let player = {
    saude: 100,
    felicidade: 50,
    play: function() {
        this.felicidade += 30;
    },
    eat: function(comida) {
        if(comida == 'laranja'){
            this.saude += 10;
        }
        if(comida == 'uva'){
            this.saude += 20;
        }            
    }
}

// Antes da execução
console.log(player);

// Execução
player.play();
player.eat('uva');

// Depois da execução
console.log(player);
