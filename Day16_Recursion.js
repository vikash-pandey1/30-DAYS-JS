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
const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum); // Output: 15

function findMax(arr){
    if(arr.length==1) return arr[0];

    let max = findMax(arr.slice(1));
    return arr[0]>max ? arr[0]:max;
}
let arr = [1, 2, 3, 4, 5,32];
console.log(findMax(arr))


function reverse(arr){
    if(arr.length<=1) return arr;

    return [arr[arr.length-1]].concat(reverse(arr.slice(0,-1)));
}
console.log(reverse(arr))

function isPalindrome(str){
    if(str.length<=1) return true;
    if(str[0]!=str[str.length-1])return false;
    return isPalindrome(str.slice(1,-1));
}
console.log(isPalindrome('ram'))
console.log(isPalindrome('raar'))


function binarySearch(arr,target,st = 0,ed = arr.length-1){
    if(st>ed) return -1;
    let mid = Math.floor((st+ed)/2);
    if(arr[mid]==target) return mid;
    if(arr[mid]>target) return binarySearch(arr,target,st,mid-1);
    return binarySearch(arr,target,mid+1,ed);
}

let result = binarySearch(arr,5);

if(result!==-1){ 
    console.log('target found at index ',result);
}else {console.log('target not found')}

function countOccurrences(arr, target) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    // Recursive case: check the first element and count in the rest of the array
    const firstElementCount = arr[0] === target ? 1 : 0;
    return firstElementCount + countOccurrences(arr.slice(1), target);
}
const array = [1, 2, 3, 2, 4, 2, 5];
const target = 2;
console.log(countOccurrences(array, target)); 



class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function inOrderTraversal(node, result = []) {
    // Base case: if the node is null, return the result array
    if (node === null) {
        return result;
    }

    // Recursively traverse the left subtree
    inOrderTraversal(node.left, result);

    // Visit the current node (add its value to the result array)
    result.push(node.value);

    // Recursively traverse the right subtree
    inOrderTraversal(node.right, result);

    return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const resultt = inOrderTraversal(root);
console.log(resultt); // Output: [4, 2, 5, 1, 6, 3, 7]

function depth(node){
    if(node==null
    ) return 0;

    let left  = depth(node.left);
    let right = depth(node.right);

    return Math.max(left,right)+1;
}
console.log(depth(root))
