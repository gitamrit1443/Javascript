// methods in js
const person={
    Name:"Amrit",
    age:22,
    about:function(){
        console.log(`My name is: ${this.firstName}and my age is:${this.age}`)
        console.log(this);//in this you can acess your object properties
    }
    
}
person.about();

//this operator is used to acess properties variables of object