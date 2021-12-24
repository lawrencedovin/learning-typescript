interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(name?: string) {
        if(name) this.name = name;
    }

    greet(phrase: string) {
        if(this.name) console.log(`${phrase} ${this.name}`);
        else console.log(`${phrase}`);
    }
}

const lawrence = new Person('Lawrence');
lawrence.greet('Hello my name is:');