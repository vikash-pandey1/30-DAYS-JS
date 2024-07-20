const name = 'vikash';
const age = 22;
console.log(`my name is ${name} and age is ${age} `)
console.log(` my name is ${name}
and age is ${age}
    `)

const arr = ['ram','shyam','hari','bari']
const [first,second,...res] = arr
console.log(first)
console.log(second)
const obj = {
    title:'bonsai',
    author:'jyoti pandya',
    year:'2009'
}
const {title,author,...rest}= obj;
console.log(title)
console.log(author)

const arr2 = [...arr]
console.log(arr2)
function sumAll(...number){
    return number.reduce((sum,curr)=>sum+curr,0)
}
const result = sumAll(1,2,3,4,5)
console.log(result)

function product(a,b=2){
    return a*b;
}
console.log(product(1))
console.log(product(2,2))

function createPerson(name,age){
    return {
        name,
        age,
        logDetails(){
            console.log(`name:${this.name} age :${this.age}`)
        }
    }
}
const person = createPerson('vikash',22)
console.log(person)
person.logDetails()

const Name='first';
const Last = 'last';
const Age = 'age';

const object = {
    [Name]:'vikash',
    [Last]:'pandey',
    [Age]:22

}
console.log(object)

