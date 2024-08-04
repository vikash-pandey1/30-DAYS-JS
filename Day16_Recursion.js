function fact(no){
    if(no==0) return 1;
    return no*fact(no-1)
}
console.log(fact(5))
function fibno(no){
    if(no<=1) return no ;
    return fibno(no-1)+fibno(no-2);
}
console.log(fibno(6))



function sumArray(arr) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }
    // Recursive case: return the first element plus the sum of the rest of the array
    return arr[0] + sumArray(arr.slice(1));
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum); // Output: 15
