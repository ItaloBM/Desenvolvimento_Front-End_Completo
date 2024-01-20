"use strict";
// Desestruturação
Object.defineProperty(exports, "__esModule", { value: true });
let nameBuilder = (pNome, ...oNomes) => {
    return pNome + " " + oNomes.join(" ");
};
const resposta = nameBuilder("Bill", "Fred", "James", "Sam");
console.log(resposta);
