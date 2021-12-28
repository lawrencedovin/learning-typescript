function Logger(log: string) {
    return (constructor: Function) => {
        console.log(log);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return <T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) => {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                //super() saves
                // name = 'Max';
                // constructor() {
                //     console.log('Creating person object...');
                // }
                // and adds the extra logic of hookElement etc.
                // which extends the class
                super();
                const hookElement = document.querySelector(`#${hookId}`);
                if(hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector('h1')!.textContent = this.name;
                }
            }
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