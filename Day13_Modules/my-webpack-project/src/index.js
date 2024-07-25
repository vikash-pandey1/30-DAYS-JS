// src/index.js
import { add, subtract } from './math';
import { greet } from './greet';

console.log(greet('World'));  // Output: Hello, World!
console.log(`10 + 5 = ${add(10, 5)}`);  // Output: 10 + 5 = 15
console.log(`10 - 5 = ${subtract(10, 5)}`);  // Output: 10 - 5 = 5
