function xpto(){
    let n = 0;
    return {next:
            function()
        {
            if (n < 10){
                n += 20;
                return {value:n/2, done:false}}
            else {
                return {value: -1, done: true}}
        }
    }
}


saida = ""
const n = xpto();
x = n.next();
while (x.done == false){
    saida += x.value + "/";
    x = n.next();
}

console.log(saida);