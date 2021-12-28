// Decorators need arguments
// Gets a function as an argument.
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

// @Logger points to a function doesn't execute it.
// Decorators execute when your class is Defined not when it is Instantiated.
// Logs the whole class because classes are just syntatic 
// sugar over a constructor function.
@Logger
class Person {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    }
}

const max = new Person();
console.log(max);