// Funções "normal"

//export{};

//function multiplica(x: number,y: number):
//number{
//    return x*y;
//}

//const resposta = multiplica(2,4);
//console.log(resposta)

// Funções com par^metro opcional

//export{};

//function multiplica(x: number,y?: number): // y:number = 4 outra opção
//number{
//    return x*(y || 4);   // return x*y;
//}

//const resposta = multiplica(2);
//console.log(resposta)

// Função de seta () =>

//export{};

//let multiplica = (x: number,y: number =4):
//number => {
//    return x*y;
//}

//const resposta = multiplica(2);
//console.log(resposta)

// Função de seta que recebe 3 objetos

export {};

let myFunc = ({ y, z, x }: { x: number; y: number; z: number }) => {
    return x;
}

const resposta = myFunc({ y: 4, z: 3, x: 5 });

console.log(resposta);
