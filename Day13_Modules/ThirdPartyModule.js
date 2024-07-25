// main.js
const _ = require('lodash');

const axios = require('axios');

const numbers = [10, 5, 100, 2, 1000];
const sortedNumbers = _.sortBy(numbers);

console.log('Sorted numbers:', sortedNumbers); // Output: Sorted numbers: [ 2, 5, 10, 100, 1000 ]

const groupedNumbers = _.groupBy(numbers, (num) => num > 10 ? 'greater' : 'lesser');
console.log('Grouped numbers:', groupedNumbers);
// Output: Grouped numbers: { lesser: [ 10, 5, 2 ], greater: [ 100, 1000 ] }

const doubledNumbers = _.map(numbers, (num) => num * 2);
console.log('Doubled numbers:', doubledNumbers); // Output: Doubled numbers: [ 20, 10, 200, 4, 2000 ]



const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();

