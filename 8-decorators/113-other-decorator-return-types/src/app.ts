// Restricting the types of T, U
// <T extends object, U extends object>: T type can be any object any structure, but needs to be an object.

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObject = merge({name: 'Lawrence'}, {age: 28});
console.log(mergedObject.age);