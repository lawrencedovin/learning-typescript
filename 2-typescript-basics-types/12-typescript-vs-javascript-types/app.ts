export {};

const add = (n1: number, n2: number) => {
    if(typeof n1 !== 'number' && typeof n2 !== 'number') {
        throw new Error('Incorrect input type!');
    }
    return n1 + n2;
}

const [n1, n2] = [5, 2.8];

const result = add(n1, n2);
console.log(result);