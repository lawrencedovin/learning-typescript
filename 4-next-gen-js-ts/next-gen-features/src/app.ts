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