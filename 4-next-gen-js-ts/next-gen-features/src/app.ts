/**let and const key words*/
// const and let are block scoped. Blocks are whatever is in the {}.  
// lower blocks can also be accessed. Forces cleaner code.
const username = 'Max';
// "const" keyword values cannot be changed.
let age = 30;
// "let" keyword values allow changes.
var password = '123abc';
// "var" keyword is for global and function scopes.

/**Spread Operator*/
const hobbies = ['Reading', 'Playing Ukulele'];
const activeHobbies = ['Walking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

// Create a Copy of an Object, not just a pointer that points to an Object in memory.
const person = {
    name: 'Max',
    age: 30
};

const copiedPerson = {...person};

/**Rest Operator*/
const add = (...numbers: number[]) => {
    let result = 0;
    // reduce method works in a way that it performs 
    // an operation on every element in an array. Returns a result 
    // that adds all the elements togethers.
    // Iterates over each element performing an operation to reduce it to a single value.
    return numbers.reduce((currentResult, currentValue) => currentResult + currentValue, 0);
};