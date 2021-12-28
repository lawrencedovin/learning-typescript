"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators need arguments
// Gets a function as an argument.
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
// @Logger points to a function doesn't execute it.
// Decorators execute when your class is Defined not when it is Instantiated.
// Logs the whole class because classes are just syntatic 
// sugar over a constructor function.
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger
], Person);
const max = new Person();
console.log(max);
//# sourceMappingURL=app.js.map