// 
function personInfo()
{
    console.log(`The person name is:${this.firstName} and age is:${this.age}`)
}
const person1={
    firstName:"harsh",
    age:8,
    about:personInfo
}

const person2={
    firstName:"Amrit",
    age:22,
    about:personInfo
}
// 
const person3={
    firstName:"Sunil",
    age:3,
    about:personInfo
}
// 
const person4={
    firstName:"Aryan",
    age:21,
    about:personInfo
}
person1.about();
person2.about();
person3.about();
person4.about();



