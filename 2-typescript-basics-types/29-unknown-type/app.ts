let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// Can't directly assign userName to userInput despite it being a string value of 'Max' 
// because uknown means that the type will always not be explicitly determined. 
// As opposed to any which will allow the variable to transform to string.
// Uknown doesn't allow anything but you do have some type checking. Choose Union over
// Uknown if possible

if(typeof userInput === 'string') {
    userName = userInput;
}