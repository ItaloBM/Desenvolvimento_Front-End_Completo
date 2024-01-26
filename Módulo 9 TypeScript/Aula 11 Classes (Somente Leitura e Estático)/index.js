"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
        Person.count++;
    }
    aboutMe() {
        return `Olá, meu nome é ${this._name} e minha idade é ${this._age}`;
    }
    get name() {
        return this._name;
    }
    set_name(name) {
        this._name = name;
    }
}
Person.count = 0;
class Func extends Person {
    get_name() {
        return this.name; // Implementado na classe base Person
    }
    constructor(name, age, FuncNumber) {
        super(name, age);
        this.FuncNumber = FuncNumber;
    }
}
let Bob1 = new Func('Bob', 25, 574);
let Bob2 = new Func('Bob', 25, 574);
let Bob3 = new Func('Bob', 25, 574);
console.log(Person.count);
