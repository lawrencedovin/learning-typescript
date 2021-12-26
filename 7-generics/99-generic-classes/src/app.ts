// Makes the class generic which can hold strings, numbers, arrays, object.
type primitive = string | number | boolean;
class DataStorage<T extends primitive> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem() {
        this.data.pop();
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Pizza');

const numberStorage = new DataStorage<number>();
numberStorage.addItem(312);

// const arrayStringStorage = new DataStorage<Array<string>>();
// arrayStringStorage.addItem(['hi', 'bye', '123']);

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name: 'Lawrence', age: 28});