function Logger(logString: string) {
    return (constructor: Function) => {
        console.log(logString);
        console.log(constructor);
    }
}

// Executes a function that will return a decorator function.
@Logger('Logging - Person')
class Person {
    name = 'Max';

    constructor() {
        console.log('Created person object.');
    }
}

const max = new Person();