function addTwoNo(a,b){
    return a+b;
}
const Person={
    name:'vikash',
    age:22,
    city:'baldeo',
    greet(){
        console.log('welcome to Person world')
    }
}


module.exports = {
    Person,
    addTwoNo
}
