function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

class Product {
    @Log
    title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    set price(value: number) {
        if(value > 0) this._price = value;
        else throw new Error('Invalid Price - should be positive number.');
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}