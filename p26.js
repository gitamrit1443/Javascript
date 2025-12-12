// 

"use strict";
// objects inside arrray
const users=[
   { userid: 1,name:"Amrit",age:22,location:"Dehradun"},
   {userid: 2,name:"Mohit",age:23,location:"Haridwar"},
   {userid: 3,name:"Sachin",age:24,location:"Nainital"}
]
// console.log(users);
for(let user of users)
{
    console.log(user.userid);
}

// nested destructuring

let [{userid:id},{location:loc}]=users;
console.log(id,loc);
// ***Nested Object Destructuring***
const employee = {
  id: 1,
  info: {
    personal: {
      name: "John",
      age: 32
    },
    job: {
      title: "Developer",
      department: "IT"
    }
  }
};
const {
  info: {
    personal: { name, age },
    job: { title }
  }
} = employee;

console.log(name);  // John
console.log(age);   // 32
console.log(title); // Developer

// ***Array Inside Object Inside Array***
const arr = [
  {
    id: 1,
    hobbies: ["cricket", "coding"]
  }
];
const [
  {
    u_id,
    hobbies: [hobby1, hobby2]
  }
] = arr;

console.log(u_id);     // 1
console.log(hobby1); // cricket
console.log(hobby2); // coding
