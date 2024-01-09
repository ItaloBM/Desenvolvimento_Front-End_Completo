let player = {
    vidas: 3,
    nome: 'Codi',
    pontos: 99,
    vivo: true,
    roupa: {
        cor: 'green',
        tamanho: 'M',
        custo: 100,
        nova: true,
    }    
};

console.log(player.nome);
console.log(player.roupa.cor);

player.vidas = 4;
console.log(player.vidas);

player.roupa.cor = 'azul';
console.log(player.roupa.cor);

player.armadura = true
console.log(player);

delete player.roupa;
console.log(player);