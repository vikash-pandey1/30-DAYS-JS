class Person{
    static noOfStudent = 0;
    constructor(name,age){
        Person.noOfStudent++;
        this.name = name;
        this.age = age;
        console.log(Person.noOfStudent)
    }

    greet(){
        console.log(`hello my name is ${this.name} and i am ${this.age} year old`)
    }
    updateAge(newAge){
        this.age = newAge;
    }
    static getDetails(){
        console.log('this is static method')
    }
    getter(){
        return this.name;
    }
    setter(name){
        return this.name = name;
    }
}
const Person1 = new Person('alice',22);
Person1.greet()
Person1.updateAge(33);
Person1.greet()


class Student extends Person{
    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId;
    }
    getStudentId(){
        return this.studentId;
    }
    greet(){
        console.log(`hello my name is ${this.name} and i am ${this.age} year old`)
    }
}

const student = new Student("vikash",20,"S123")
console.log(student.studentId)
student.greet()
Person.getDetails()
console.log(Person1.getter());
console.log(Person1.setter('vikash'))

class Account{
    #balance;
    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposite(amount){
        this.#balance+=amount;
    }
    withraw(amount){
        if(amount>0 && amount<this.#balance){
            this.#balance-=amount;
            console.log(`withraw ${amount} newBalance: ${this.#balance}`)
        }else{
            console.log('insufficient balance')
        }
    }
    checkBalance(){
        return this.#balance;
    }
}

const acc = new Account(1)
acc.deposite(20)
acc.deposite(200)
acc.withraw(219)
console.log(acc.checkBalance())


