interface Lengthy {
    length: number;
}

// Need to pass in a type with a length property like string/ arrays.
// Not too concerned about which type of data as long as there's a length property.
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let description = 'Got no value.';
    if(element.length > 0) description = `Got ${element.length} element/s.`;
    return [element, description];
}

console.log(countAndPrint(['Hi', 'there!']));