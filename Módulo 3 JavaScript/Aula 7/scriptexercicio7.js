let player = {
    vidas: 3,
    nome: 'Codi',
    pontos: 99,
    emagico: true,
    espada: true,
    magia: 100,
    mapa: {
        nome: 'Mapa Central',
        cidades: [],
        cidadesvisitadas: [],
        objetosencontrados: []
    }    
};

player.temcalice = true;

delete player.temcalice;