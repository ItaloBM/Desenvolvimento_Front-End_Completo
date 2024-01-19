// Sistema de E-commerce

export{};

function loja(saldo:number, produto:string): string
{
    if(produto == "Celular" && saldo >= 1000){
        saldo -= 1000;
        return "Compra Efetuda";
    }
    if(produto == "TV" && saldo >= 2000){
        saldo -= 1000;
        return "Compra Efetuda";
    }
    if(produto == "Computador" && saldo >= 3000){
        saldo -= 1000;
        return "Compra Efetuda";
    }
    if(produto != "Celular" && produto != "TV" && produto != "Computador"){
        return "Produto inválido";
    }
    else{
        return "Saldo insuficiente"
    }
}

let a = loja(2000, "Celular");
console.log(a)

let b = loja(1000, "Mouse");
console.log(b)

let c = loja(1000, "TV");
console.log(c)