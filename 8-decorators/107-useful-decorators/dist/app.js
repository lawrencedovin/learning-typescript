"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(log) {
    return (constructor) => {
        console.log(log);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return (constructor) => {
        const hookElement = document.querySelector(`#${hookId}`);
        const person = new constructor();
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1').textContent = person.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    WithTemplate('<h1>My Person Object</h1>', 'app')
], Person);
//# sourceMappingURL=app.js.map