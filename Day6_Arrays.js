let arr = [1,2,3,4,5];
console.log(arr)
console.log("first value  "+arr[0])
console.log("last value  "+arr[arr.length-1])

console.log(arr)
arr.push(6);
console.log(arr)
arr.pop();
console.log(arr);
arr.shift();
console.log(arr)
arr.unshift(0);
console.log(arr)

const arr1 = arr.map((value)=>{
    return value*value;
})
console.log("double using arr map"+arr1)
const findEven = arr.filter((value)=>{
    return value%2==0;
})
console.log("use filter to find even no  "+findEven)
const sum = arr.reduce((acc,value)=>acc+value)
console.log("use reduce to find sum "+sum)

for(let it of arr){
    console.log(it)
}
arr.forEach((value)=>{
    console.log(value)
})


const arr3 = [[1,2,3],[4,5,6],[7,8,9]];
for(let it of arr3){
    for(let value of it){
        console.log(value)
    }
    console.log()
}
console.log(arr3[2][1])
