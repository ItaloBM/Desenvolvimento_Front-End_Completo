// Classes

export{};

interface iPerson {
    name: string;
    age: number;
}

class Person implements iPerson {
    name;
    age;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    aboutMe():string {
        return `Olá, meu nome é ${this.name} e minha idade é ${this.age}`
    }
}

//let Bob = new Person('Bob',25);
//console.log(Bob.aboutMe());

class Func extends Person {
    FuncNumber;
    constructor(name:string, age:number, FuncNumber:number){
        super(name,age)
        this.FuncNumber = FuncNumber;
    }
}

let Bob = new Func('Bob',23,574);
console.log(Bob.FuncNumber);
