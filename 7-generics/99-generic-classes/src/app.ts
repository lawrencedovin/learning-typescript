const userInput = '';
// If userInput is null or undefined then use the fall back 'DEFAULT'.
// Empty string is still allowed
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);