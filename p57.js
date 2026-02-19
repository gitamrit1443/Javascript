//prototype
// javascript function provides us empty object or 
// (free space that is a empty object) to add
//  key value pair in function  
function hello()
{
    console.log("hello World");
    const myObj=Object.create(hello.prototype)
}
console.log(hello.prototype);
// only functions provide prototype property object also dont have protoype property
// Eg 
let myval=[];
if(myval.prototype) console.log("Protype is present");
else console.log("Prototype is not present");
hello.prototype.canVote=function(){ console.log("user can vote");}
console.log(hello.canVote);//new property is added as function 

// canVote
// : 
// ƒ ()
// length
// : 
// 0
// name
// : 
// ""
// prototype
// : 
// {}
// arguments
// : 
// null
// caller
// : 
// null
// [[FunctionLocation]]
// : 
// p57.js:15
// [[Prototype]]
// : 
// ƒ ()
// [[Scopes]]
// : 
// Scopes[2]