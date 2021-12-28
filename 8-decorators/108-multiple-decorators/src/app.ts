function Logger(log: string) {
    console.log('Logger Factory');
    return (constructor: Function) => {
        console.log(log);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('Template Factory');
    return (constructor: any) => {
        const hookElement = document.querySelector(`#${hookId}`);
        const person = new constructor();
        if(hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1')!.textContent = person.name;
        }
    }
}

@Logger('Logger')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    }
}