function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

// combinedValues should take a function that takes any 2 number parameters
// and returns a number.
let combinedValues: (n1: number, n2: number) => number;
combinedValues = add;

printResult(combinedValues(5, 12));