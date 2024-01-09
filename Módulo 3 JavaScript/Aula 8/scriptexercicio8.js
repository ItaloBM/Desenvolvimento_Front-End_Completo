let player = {
    saude: 100,
    felicidade: 50,
    moedas: 20,
    roupa: 'nao',
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
    },
    compraroupa: function() {
        if(this.moedas >= 20){
            this.moedas -= 20;
            this.roupa = 'sim';
        }
        else if(this.moedas < 20){
            console.log("Moedas insuficientes!");
        }
    }
}

// Antes da execução
console.log(player);

// Execução
player.compraroupa();
player.compraroupa();


// Depois da execução
console.log(player);