// P2.1 Flappy Bird: Introdução
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Carregando imagens
var bird = new Image();
bird.src = "images/bird.png"
var bg = new Image();
bg.src = "images/bg.png"
var chao = new Image();
chao.src = "images/chao.png"
var canocima = new Image();
canocima.src = "images/canocima.png"
var canobaixo = new Image();
canobaixo.src = "images/canobaixo.png"

// Variaveis
var eec = 100;
var constant;
var bX = 33;
var bY = 200;
var gravity = 1.4;
var score = 0;
var cano = [];

cano[0] = {
    x: canvas.width,
    y: 0
}

// Carregando sons
var fly = new Audio();
fly.src = "sounds/fly.mp3"
var scor = new Audio();
scor.src = "sounds/score.mp3"

    // Captura de tecla
    document.addEventListener("keydown", voa);

    // Voando
    function voa(){
        bY = bY - 26;
        fly.play();
    }

function jogo(){
    //Fundo do jogo
    ctx.drawImage(bg,0,0);
    // DrawImage(imagem x,y)

    // Criando canos
    for(let i=0; i < cano.length; i++){
        // Posição do cano de baixo
        constant = canocima.height + eec;    // eec = Espaço entre os canos
        // Configurando o cano de cima
        ctx.drawImage(canocima, cano[i].x, cano[i].y);
        // Configurando o cano de baixo
        ctx.drawImage(canobaixo, cano[i].x, cano[i].y+constant);
        // Movimentação do cano
        cano[i].x = cano[i].x - 1

        // GLOSSARIO
        // Math.floor(x) retorna o menor número inteiro dentre os parãmetros.
        // Math.floor(45,95) -> 45

        // Math.random() retorna um número pseudo-aleatório no intervalo [0,1]
        // Math.random()*4000 = valor pseudo-aleatório entre 0 e 4000

        // Criar novos canos
        if(cano[i].x == 125){
            cano.push({
                x: canvas.width,
                y: Math.floor(Math.random()*canocima.height)-canocima.height
            })
        }

        // Passaro entre as bordas do cano
        if(bX + bird.width >= cano[i].x && bX <= cano[i].x + canocima.width
            // Passaro colidiu com o cano de cima ou com o cano de baixo
            && (bY <= cano[i].y + canocima.height || bY+bird.height >= cano[i].y+constant)
            // Passaro colidiu com o chao
            || bY + bird.height >= canvas.height - chao.height){
                location.reload();
            }

            // Marcando pontos
            if(cano[i].x == 5){
                score = score + 1;
                scor.play();

            }
    }

    // Desenhando o chão
    ctx.drawImage(chao,0,canvas.height - chao.height);

    // Passaro
    ctx.drawImage(bird,bX,bY);
    bY += gravity

    // Criando o placar
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Placar: " + score, 10, canvas.height-20);

    requestAnimationFrame(jogo);
}

jogo();