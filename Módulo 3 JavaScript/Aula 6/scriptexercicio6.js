let moedas = 0;
let qtespada = 0;
let qtescudo = 0;
let qtadaga = 0;

function loja(moedas, item){
    if(item == 'espada' && moedas >= 100){
        moedas -= 100;
        qtespada += 1;
        console.log("Espada comprada");
    }
    else if(item == 'espada' && moedas < 100){
        console.log("Moedas nao suficiente para efetuar a compra da espada");
    }
    if(item == 'escudo' && moedas > 200){
        moedas -= 200;
        qtescudo += 1;
        console.log("Escudo comprado");
    }
    else if(item == 'escudo' && moedas < 200){
        console.log("Moedas nao suficiente para efetuar a compra do escudo");
    }
    if(item == 'adaga' && moedas > 300){
        moedas -= 300;
        qtadaga += 1;
        console.log("Adaga comprada");
    }
    else if(item == 'adaga' && moedas < 300){
        console.log("Moedas nao suficiente para efetuar a compra da adaga");
    }
}