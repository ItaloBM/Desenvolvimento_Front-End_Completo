"use strict";
// Classes
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    aboutMe() {
        return `Olá, meu nome é ${this.name} e minha idade é ${this.age}`;
    }
}
class Func extends Person {
    constructor(name, age, FuncNumber) {
        super(name, age);
        this.FuncNumber = FuncNumber;
    }
}
let Bob = new Func('Bob', 23, 574);
console.log(Bob.FuncNumber);
//let Bob = new Person('Bob',25);
//console.log(Bob.aboutMe());
