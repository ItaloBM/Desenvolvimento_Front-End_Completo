let vidas = 20;
let pontos = 1000;
let magico = !true;

if (vidas > 3 && pontos > 1000){
    alert("Ganhou chave azul")
}
if (vidas < 3 || pontos < 1000){
    alert("Ganhou chave verde");
}
if (pontos == 1000 && magico == false){
    alert("Ganhou chave laranja");
}