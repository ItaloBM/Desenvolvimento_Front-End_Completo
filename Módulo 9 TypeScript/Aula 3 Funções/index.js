"use strict";
// Funções "normal"
Object.defineProperty(exports, "__esModule", { value: true });
let myFunc = ({ x, y, z }) => {
    return x;
};
const resposta = myFunc({ y: 4, z: 3, x: 5 });
console.log(resposta);
