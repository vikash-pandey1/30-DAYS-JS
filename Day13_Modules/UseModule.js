const {addTwoNo,Person} = require('./CreateModule.js');
console.log(`${Person.name}, ${Person.age} , ${Person.city}`)
Person.greet();
console.log(addTwoNo(2,5))