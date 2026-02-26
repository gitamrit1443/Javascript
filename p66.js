// getter and settters
class Person
{
    constructor(firsName,lastName,age)
    {
        this.firsName=firsName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName(){
        return `${this.firsName} ${this.lastName}`;
    }
    set fullName(fullName)
    {
        const [first,second]=fullName.split(" ");
        this.firstName=first;
        this.lastName=second;
 }
}
const person1=new Person("Amritpal","Singh");
console.log(person1.fullName);
fullName("Mohit Verma");
console.log(person1.fullName);