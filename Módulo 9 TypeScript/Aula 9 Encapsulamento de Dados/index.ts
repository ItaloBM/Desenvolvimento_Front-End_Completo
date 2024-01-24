// Encapsulamento de Dados

export{};

class Person{
    public name: string;
    protected age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    aboutMe():string{
        return `Olá, meu nome é ${this.name} e minha idade é ${this.age}`;
    }    
}

class Func extends Person{
    private FuncNumber;

    constructor(name:string, age:number, FuncNumber:number){
        super(name,age);
        this.FuncNumber = FuncNumber;
    }
}

let Bob = new Func('Bob', 25, 574);
console.log(Bob.FuncNumber);