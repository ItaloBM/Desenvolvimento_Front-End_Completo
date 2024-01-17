"use strict";
// Variáveis
Object.defineProperty(exports, "__esModule", { value: true });
let d;
d = `
Hello 
World
Multilinhas`;
console.log(d);
let stringArr;
stringArr = ['Curso', 'TypeScript'];
let genericArr;
genericArr = ['Codi', 'Academy'];
console.log(stringArr);
console.log(genericArr);
let myTuple;
myTuple = [3, true, "text"];
console.log(myTuple);
var Colors;
(function (Colors) {
    Colors["Red"] = "red";
    Colors["Blue"] = "blue";
    Colors["Green"] = "green";
})(Colors || (Colors = {}));
;
let color;
color = Colors.Red;
console.log(color);
