interface IPerson {
    id: number;
    sayMyName(): string;
}

class pessoa implements IPerson {
    readonly id: number;
    protected nome: string;
    private age: number;
    constructor(id: number, nome: string, age: number) {
        this.id = id;
        this.nome = nome;
        this.age = age;
    }
    sayMyName(): string {
        return this.nome;
    }
}

//Mesma coisa que acima
class PersonRefect {
    constructor(
        readonly id: number,
        protected nome: string,
        private age: number,
    ) {
    }
}

class Employee extends pessoa {
    constructor(id: number, nome: string, age: number) {
        super(id, nome, age);
    }
    whoIAm() {
        return this.nome;
    }
}

const pessoas = new pessoa(22, 'John', 24);