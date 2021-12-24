"use strict";
class Person {
    constructor(name) {
        this.age = 30;
        this.name = name;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const lawrence = new Person('Lawrence');
lawrence.greet('Hello my name is:');
//# sourceMappingURL=app.js.map