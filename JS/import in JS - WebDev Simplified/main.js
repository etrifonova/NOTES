// import User from './user.js'

// const user = new User('Bob', 11);
// console.log(user);

/* It's possible to change the name of the imported module like this:
*/ 

import U, { printName as printUserName, printAge as printUserAge } from './user.js'

const user = new U('Bob', 11);
console.log(user);
printUserName(user);
printUserAge(user);