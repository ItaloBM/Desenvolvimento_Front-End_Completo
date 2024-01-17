// Variáveis

//strings

export{};
let d:string;
d = `
Hello 
World
Multilinhas`;

console.log(d);

//Array

export{};

let stringArr: string[];
stringArr = ['Curso','TypeScript'];

let genericArr:
Array<string>;
genericArr = ['Codi','Academy'];

console.log(stringArr);
console.log(genericArr);

//Tuplas

export{};

let myTuple:[number, boolean, string];
myTuple = [3, true, "text"];

console.log(myTuple);

//Enum

export{};

enum Colors {Red = 'red', Blue = 'blue', Green = 'green'};

let color: Colors;
color = Colors.Red;

console.log(color);