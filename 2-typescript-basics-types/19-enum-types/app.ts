export {};

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR};
const {ADMIN, READ_ONLY, AUTHOR} = Role;

const person = {
    name: 'Lawrence',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};

if(person.role === ADMIN) {
    console.log('is admin');
}