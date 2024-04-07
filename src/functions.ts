interface MatchFunc {
    (x: number, y: number): number;
}

const sum: MatchFunc = (x: number, y: number): number => {
    return x + y;
}

const sub: MatchFunc = (x: number, y: number): number => {
    return x - y;
}

const value = sum(2, 3);

const log = (message: string) => {
    console.log(message);
}
