// const bar = require('./bar')

// console.log(bar.name)
// console.log(bar.age)

// bar.sayHello('kobe');

const { name, age , sayHello } = require('./bar');

console.log(name);
console.log(age);
sayHello('kobe');

console.log(module);
