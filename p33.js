"use strict";
// ****code starts here******
// without uing parameter destructuring tradational way
const person={
    firstName:"Amrit",
    gender:"Male",
    email:"sap@gmail.com"
};
const printDetail=(obj)=>
{
    console.log(obj.firstName);
    console.log(obj.gender);
    console.log(obj.email);
}
printDetail(person);
//using Parameter Destructuring

// ****code starts here******
const persons={
    firstName:"Amrit",
    gender:"Male",
    email:"sap@gmail.com"
};
const printDetails=({firstName,gender,email})=>
{
    console.log(firstName);
    console.log(gender);
    console.log(email);
}
printDetail(persons);