// Type

type Order = {
    productId: string,
    price: number,
}


type User = {
    firstName: string,
    age: number,
    email: string,
    password?: string
    orders: Order[],
    register(): string;
};

const user: User = {
    firstName: 'John',
    age: 22,
    email: 'john@example.com',
    orders: [{ productId: '1', price: 200 }],
    register() {
        return 'Sou uma string';
    }
}

const printlog = (message?: string) => { }
printlog(user.password)

//Unions
type Author = {
    books: string[],
}

const author: Author & User = {
    age: 55,
    books: ['4'],
    email: 'john@example.com',
    firstName: 'John',
    password: 'password',
    orders: [],
    register() {
        return 'Sou uma string';
    }
}

//Interfaces
interface UserInterface {
    readonly firstName: string,
    email: string,
    login(): string
}

const emailUser: UserInterface = {
    email: 'john@example',
    firstName: 'John',
    login() {
        return 'Sou uma string';
    }
}

interface AuthorInterface {
    books: string[],
}

const newAuthor: UserInterface & AuthorInterface = {
    books: ['4'],
    email: 'john@example',
    firstName: 'John',
    login() {
        return 'Sou uma string';
    }
}

type Grade = number | string
const grade: Grade = 1;