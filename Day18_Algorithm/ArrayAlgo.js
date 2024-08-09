function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is larger than the array length
    reverse(arr, 0, n - 1);       // Reverse the entire array
    reverse(arr, 0, k - 1);       // Reverse the first k elements
    reverse(arr, k, n - 1);       // Reverse the remaining elements
}

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Example usage
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotateArray(arr, k);
console.log("Rotated array:", arr);
