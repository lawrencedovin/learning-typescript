// Gets an object along with a passed in key.
// Returns the value of that key in that object.
// First parameter should be any kind of object.
// Second parameter is any kind of key that in that object.
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({name: 'Lawrence'}, 'name');