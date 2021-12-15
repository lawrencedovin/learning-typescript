export {};

const add = (n1: number, n2: number, showResults: boolean, phrase: string) => {
    return showResults ? console.log(`${phrase} ${n1 + n2}`) : n1 + n2; 
}

let [n1, n2] = [5, 2.8];
const showResults = true;
const phrase = 'Result is: ';

add(n1, n2, showResults, phrase);