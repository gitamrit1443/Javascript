// call apply bind in js

function greet(age)
{
  console.log(`Hello ${this.Name} and age is:${age}`);
}
const user1={Name:"Amrit"}
const user2={Name:"Virat"}
greet.call(user2,22);

// const person1={
//     Name:"Virat Sharma",
//     age:25,
//     hobby:"playing",
//     personInfo:function(...args)
//     {
//         console.log(`Users Name is:${this.Name} and user Age is:${this.age},Other information is:${args}`);
//     }
// }
//shorter syntax for writing methods inside object
const person1={
    Name:"Virat Sharma",
    age:25,
    hobby:"playing",
    personInfo(...args)
    {
        console.log(`Users Name is:${this.Name} and user Age is:${this.age},Other information is:${args}`);
    }
}
const person2={
    Name:"Karan Sharma",
    age:22,
    hobby:"playing"
}
person1.personInfo.call(person2,"Playing","Driving","Skiing","Cycling","Coding","Java","Javascript","html","css","tailwind");//use of call
const newFunc=person1.personInfo.bind(person2,"Playing","Driving","Skiing","Cycling","Coding","Java","Javascript","html","css","tailwind");//use of bind
newFunc();
console.log(typeof(newFunc));
person1.personInfo.apply(person2,["Playing","Driving","Skiing","Cycling","Coding","Java","Javascript","html","css","tailwind"])//use of apply 

// call method runs function immediately apply 
// method arguments are passed inthe for m ofarray,
// bind function returns a new function rather tthan calling it immediately 
// it is useful if youwant to store value in a function
