interface ErrorContainer {
    // If property doesn't exist like email error but not a username error then omit username.
    // Gives flexibility for not knowing how many properties and what names ahead of time.
    // { email: 'Not a valid email.', username: 'Must at least 5 characters long.' }
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email.',
    username: 'Must start with a capital character!'
};