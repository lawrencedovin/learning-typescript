function PropertyDecorator(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function AccessorDecorator(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function MethodDecorator(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// position is the index of the parameter starting at 0
function ParameterDecorator(target: any, name: string | Symbol, position: number) {    
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @PropertyDecorator
    title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    // target: constructor
    // name of the setter: price
    // descriptor: describes the setter
    @AccessorDecorator
    set price(value: number) {
        if(value > 0) this._price = value;
        else throw new Error('Invalid Price - should be positive number.');
    }

    // target: constructor
    // name of method: getPriceWithTax
    // descriptor: describes the method
    @MethodDecorator
    getPriceWithTax(@ParameterDecorator tax: number) {
        return this._price * (1 + tax);
    }
}