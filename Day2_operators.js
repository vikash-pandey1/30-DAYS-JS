let a = 1;
let b = 2;
console.log(a+b);
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)


a+=5
console.log(a)
a-=5
console.log(a)


console.log(a<b)
console.log(a>b)
console.log(a<=b)
console.log(a>=b)
console.log(a==b)
console.log(a===b)


if(a<b && b>a){
    console.log('b is greater')
}else{
    console.log('a is greater')
}
if(a>b || b>a){
    console.log('b is greater')
}else{
    console.log('a is greater')
}
if(!(a>b)){
    console.log('b is greater')
}else{
    console.log('a is greater')
}


a<0 ?console.log('negivate'):console.log('positive')