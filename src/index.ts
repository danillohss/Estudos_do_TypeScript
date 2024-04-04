// Tipos básicos
let age: number = 5;
const firstName: string = "Danillo";
const isValid: boolean = false;
let idk: any = 5;

idk = '12';
idk = 12;

const ids: number[] = [1, 2, 3, 4, 5, 6]
const booleans: boolean[] = [true, false, true, false]
const names: string[] = ["Danillo", 'Diego', 'Roberta', 'Lucas']

// Tupla
const person: [number, string] = [1, '1']

//Lista de tuplas
const people: [number, string][] = [
    [1, '1'],
    [2, '2'],
    [3, '3'],
]

//Intersections
const ProductId: string | number = 2;

//Enum
enum Direction {
    Up = 1,
    Down = 2
}
const direction = Direction.Up

//Type Assertions
const productName: any = 'boné'

let itemId = productName as string;
