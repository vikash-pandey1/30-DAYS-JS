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