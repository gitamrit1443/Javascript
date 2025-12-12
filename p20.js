// Array destructuring in javascript

// your task is to store values of an array into different variables using destructuring method
"use strict";
const myArr=[1,2,3,4,5,6];
// in tradational languages method
let myVar1=myArr[0];
let myVar2=myArr[1]; 
console.log(myVar1);
console.log(myVar2);   
// in modern javscript shortcut using aray destructuring

let [myVal1,myVal2,myVal3]=myArr;
console.log(myVal1);
console.log(myVal2);
console.log(myVal3);

// creating new arraywith array  destructuring

const myNewArray=myArr.slice(2);
console.log(myNewArray);