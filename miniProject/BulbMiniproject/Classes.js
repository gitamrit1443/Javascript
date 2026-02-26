//Question 1
// Create a constructor function Person
// properties: name, age
// prototype method: introduce()
// → output: "Hi, I am ${name} and I am ${age} years old"
//Sol:

class Person{
    // let name,age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    about()
    {
  console.log(`Hi ,I am ${this.name} and I am ${this.age} years old`);
    }
}
Person.prototype.introduce=function()
{
    console.log(`Hi ,I am ${this.name} and I am ${this.age} years old`);
}
const users=[
    new Person("Amrit",23),new Person("Rohit",22),new Person("Ronit",12),new Person("Vedant",20),new Person("Samar",19)
    ];
for(let user of users)
{
    user.introduce();
    console.log(users[0].introduce === users[1].introduce);// true Kyuki method prototype me stored hai, har object me alag copy nahi bani.
}