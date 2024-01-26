export {};

class Person {
    public _name: string;     // readonly somente leitura
    private _age: number;
    static count: number = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
        Person.count++;
    }

    aboutMe(): string {
        return `Olá, meu nome é ${this._name} e minha idade é ${this._age}`;
    }

    get name(): string {
        return this._name;
    }

    set_name(name: string) {
        this._name = name;
    }
}

class Func extends Person {
    get_name(): string {
        return this.name; // Implementado na classe base Person
    }

    private FuncNumber;

    constructor(name: string, age: number, FuncNumber: number) {
        super(name, age);
        this.FuncNumber = FuncNumber;
    }
}
let Bob1 = new Func('Bob', 25, 574);
let Bob2 = new Func('Bob', 25, 574);
let Bob3 = new Func('Bob', 25, 574);
console.log(Person.count)