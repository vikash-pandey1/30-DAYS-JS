function outer(){
    const vari = 1;
    function ram (){
        return `${vari}`
    }
    return ram;

}
const myInnerFun = outer();
console.log(myInnerFun())

function createCounter(){
    let counter =0;
    return {
        increment:function(){
            counter++;
        },
        getCurrent:function(){
            return counter;
        }
    }
}

const muCounter = createCounter();
muCounter.increment();
muCounter.increment();
muCounter.increment();

console.log(muCounter.getCurrent())

function genereteRandom(){
    let lastId =0;
    return function(){
        lastId++;
        return `id_  ${lastId}`;
    }
}

const generateUniqueId =genereteRandom();
console.log(generateUniqueId())
console.log(generateUniqueId())

function createGreeter(userName){
    return function(){
        return `Hello ${userName}`
    }
}

const greetJohn = createGreeter('john');
console.log(greetJohn());

// Function to create an array of functions
function createFunctionArray(size) {
    // Array to hold the functions
    const functions = [];
  
    // Loop to create the functions
    for (let i = 0; i < size; i++) {
      // Capture the current index using a closure
      functions.push(
        (function(index) {
          return function() {
            console.log(index);
          };
        })(i)
      );
    }
  
    return functions;
  }
  
  // Create an array of functions
  const functionArray = createFunctionArray(5);
  
  // Call each function in the array
  for (let i = 0; i < functionArray.length; i++) {
    functionArray[i](); // Output: 0, 1, 2, 3, 4
  }
  



  // Function to create a collection manager
function createCollectionManager() {
    // Private collection array
    let collection = [];
  
    return {
      // Method to add an item to the collection
      addItem: function(item) {
        collection.push(item);
        console.log(`${item} added to the collection.`);
      },
      // Method to remove an item from the collection
      removeItem: function(item) {
        const index = collection.indexOf(item);
        if (index !== -1) {
          collection.splice(index, 1);
          console.log(`${item} removed from the collection.`);
        } else {
          console.log(`${item} not found in the collection.`);
        }
      },
      // Method to update an item in the collection
      updateItem: function(oldItem, newItem) {
        const index = collection.indexOf(oldItem);
        if (index !== -1) {
          collection[index] = newItem;
          console.log(`${oldItem} updated to ${newItem}.`);
        } else {
          console.log(`${oldItem} not found in the collection.`);
        }
      },
      // Method to display the current collection
      displayCollection: function() {
        console.log('Current Collection:', collection);
      }
    };
  }
  
  // Create an instance of the collection manager
  const myCollection = createCollectionManager();
  
  // Add items to the collection
  myCollection.addItem('Item 1');
  myCollection.addItem('Item 2');
  
  // Display the current collection
  myCollection.displayCollection(); // Output: Current Collection: ['Item 1', 'Item 2']
  
  // Update an item in the collection
  myCollection.updateItem('Item 1', 'Updated Item 1');
  
  // Display the current collection
  myCollection.displayCollection(); // Output: Current Collection: ['Updated Item 1', 'Item 2']
  
  // Remove an item from the collection
  myCollection.removeItem('Item 2');
  
  // Display the current collection
  myCollection.displayCollection(); // Output: Current Collection: ['Updated Item 1']
  


  // Function to create a memoized version of another function
function memoize(func) {
    // Object to store results of previous computations
    const cache = {};
  
    return function(...args) {
      // Create a key based on the arguments
      const key = JSON.stringify(args);
  
      // If the result is already in the cache, return it
      if (cache[key]) {
        console.log('Returning cached result for:', key);
        return cache[key];
      }
  
      // Otherwise, compute the result and store it in the cache
      const result = func(...args);
      cache[key] = result;
      console.log('Computing and storing result for:', key);
      return result;
    };
  }
  
  // Example function to be memoized
  function slowFunction(num) {
    // Simulate a slow computation
    let result = 0;
    for (let i = 0; i <= num; i++) {
      result += i;
    }
    return result;
  }
  
  // Create a memoized version of the example function
  const memoizedSlowFunction = memoize(slowFunction);
  
  // Use the memoized function
  console.log(memoizedSlowFunction(5)); // Output: Computing and storing result for: [5] and returns 15
  console.log(memoizedSlowFunction(5)); // Output: Returning cached result for: [5] and returns 15
  console.log(memoizedSlowFunction(10)); // Output: Computing and storing result for: [10] and returns 55
  console.log(memoizedSlowFunction(10)); // Output: Returning cached result for: [10] and returns 55
  


  // Function to create a memoized version of another function
function memoize(func) {
    // Object to store results of previous computations
    const cache = {};
  
    return function(...args) {
      // Create a key based on the arguments
      const key = JSON.stringify(args);
  
      // If the result is already in the cache, return it
      if (cache[key]) {
        console.log('Returning cached result for:', key);
        return cache[key];
      }
  
      // Otherwise, compute the result and store it in the cache
      const result = func(...args);
      cache[key] = result;
      console.log('Computing and storing result for:', key);
      return result;
    };
  }
  
  // Factorial function to be memoized
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // Create a memoized version of the factorial function
  const memoizedFactorial = memoize(factorial);
  
  // Use the memoized factorial function
  console.log(memoizedFactorial(5)); // Output: Computing and storing result for: [5] and returns 120
  console.log(memoizedFactorial(5)); // Output: Returning cached result for: [5] and returns 120
  console.log(memoizedFactorial(6)); // Output: Computing and storing result for: [6] and returns 720
  console.log(memoizedFactorial(6)); // Output: Returning cached result for: [6] and returns 720
  