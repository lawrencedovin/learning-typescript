"use strict";
exports.__esModule = true;
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var ADMIN = Role.ADMIN, READ_ONLY = Role.READ_ONLY, AUTHOR = Role.AUTHOR;
var person = {
    name: 'Lawrence',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};
if (person.role === ADMIN) {
    console.log('is admin');
}
console.log(name);
