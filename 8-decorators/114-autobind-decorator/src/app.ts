// A function that merges 2 Objects and returns a Merged Object.
// objA is any type but different type from objB.
// Returns the Intersection of them.
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Lawrence'}, {age: 28});

console.log(mergedObj.name);
