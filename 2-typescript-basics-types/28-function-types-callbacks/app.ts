function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}

// combinedValues should take a function that takes any 2 number parameters
// and returns a number.
let combinedValues: (n1: number, n2: number) => number;
combinedValues = add;

printResult(combinedValues(5, 12));

addAndHandle(10, 20, (result) => {
    console.log(result);
})