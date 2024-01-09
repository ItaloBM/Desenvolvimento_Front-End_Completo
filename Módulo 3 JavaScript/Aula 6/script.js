//function htm(horas){
//    let resultado = horas * 60;
//    return resultado;
//}

//let a = htm(10);
//alert(a);

//function estado(vel){
//    if(vel == 0){
//        alert("Parado");
//    }
//    else if (vel > 0 && vel < 100){
//        alert("Andando");
//    }
//    else if (vel > 100){
//        alert("Correndo");
//    }
//}

//estado(380);

function recebebonus(tempo, vidas){
    if(tempo > 1000 && vidas < 2){
        alert("Recebe bonus");
    }
}

recebebonus(2000, 1);