// Arrays in Javascript 
// your code goes here
"use strict";
let arr=["Amrit","Mohit","Karan"];
let mixed=["Aman",12,34.56,true,undefined,null];
console.log(Array.isArray(arr));
console.log(arr);
console.log(mixed);
let obj={};//ways to define object literal
console.log(typeof(arr));
console.log(Array.isArray(arr));// function used to check whehther given object is array or not
console.log(Array.isArray(obj));
console.log(arr[2]);
arr[2]="Pankaj";
console.log(arr[2]);

// Array Methods in Javascript
//from last

let myArr=[1,2,3,4,5];
console.log(myArr);
myArr.push(6);//adds 6 to last and this method is mutuable method i.e.capability to modify the array
console.log(myArr);
let val=myArr.pop();//removes the last element from the array
console.log(myArr);
console.log("popped fruit is:",val);

//pushing and popping from head
myArr.unshift(19);
console.log(myArr);
myArr.shift();
console.log(myArr);
//  push and pop are faster than shift and unshift we generally use push and pop in programming





