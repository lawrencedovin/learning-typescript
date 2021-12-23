interface MathFunction {
    (a: number, b: number): number;
}

let add: MathFunction;

add = (num1: number, num2: number) => {
    return num1 + num2;
}

console.log(add(1, 2));