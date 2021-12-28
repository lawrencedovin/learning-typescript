function Logger(log: string) {
    return (constructor: Function) => {
        console.log(log);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return (constructor: any) => {
        const hookElement = document.querySelector(`#${hookId}`);
        const person = new constructor();
        if(hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1')!.textContent = person.name;
        }
    }
}

@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    }
}