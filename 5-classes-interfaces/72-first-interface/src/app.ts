interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

let lawrence: Person;

lawrence = {
    name: 'Lawrence',
    age: 28,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

lawrence.greet('Hi there - I am');