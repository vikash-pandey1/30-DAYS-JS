function check(no){
    no%2==0?console.log('even'):console.log('odd')
}
check(22)

function square(no){
    return no*no;
}
console.log(square(6))



function greater(a,b){
    a>b?console.log('a is greater'):console.log('b is greater')
}
greater(3,5)

function str(str1,str2){
    return str1+str2;
}
console.log(str('absd','sgfsd'));



const sum = (a,b)=>{
    return a+b;
}
console.log(sum(35,35))

const strcheck = (ch,str)=>{
    return str.includes(ch)?true:false;
}
console.log(strcheck('ab','dfbba'))



const para = (a,b=5)=>{
    return a*b;
}

console.log(para(10,3))
const para2 = (name,age=22)=>{
    console.log(`welcome ${name} you age is ${age}`)
}
para2('vikash',23)



function higher(func,no){
    return function(){
        for(let i=1;i<=no;i++){
            func();
        }
    }
}
const func = ()=> console.log('hello')
const say = higher(func,5)
say();

function apply(func1,func2,value){
    const result = func1(value);
    const result2 = func2(result);
    return result2;
}
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const result = apply(addTwo,multiplyByThree,5);
console.log(result);

