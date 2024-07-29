class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`hello my name is ${this.name} and i am ${this.age} year old`)
    }
    updateAge(newAge){
        this.age = newAge;
    }

}

const Person1 = new Person('alice',22);
Person1.greet()
Person1.updateAge(33);
Person1.greet()

