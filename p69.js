//Static propperties an methods iin js
// normal method 
// class person{
//     greet()
//     {
//         console.log("Hello");    
//     }
// }
// const p=new person();
// p.greet();
// static method
class Person
{
    static greet()
    {
        console.log("Hello World");
    }
}
Person.greet();
// static properties
class person{
    static name="Amritpal Singh";
}
console.log(person.name);
person.name="Mohit Verma";
console.log(person.name);
// private modifier
class Bank{
    #balance=1000;
    get Data()
    {
        console.log(this.#balance);
    }
}
const b=new Bank();
b.Data;
// console.log(b.#balance); error
// Property '#balance' is not accessible outside class 'Bank' 
// because it has a private identifier