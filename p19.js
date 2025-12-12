// your code goes here
// array operations

"use strict";
// cloning an Array
let arr1=[1,2,3,4,5];
// let arr2=[].concat(arr1);
// let arr2=array.slice(0,arr.length-1);
let arr2=[...arr1];//spread operatorcopies element of one array to another
console.log((arr1===arr2));
console.log(arr2);

// fastest way to clone an array is slice method but many people use spread operator method it is easy
let arr3=[6,7,8,9];
// arr1+=[].concat(arr3);
// arr1=arr1+arr3;
// [].concat(arr2);
arr1=[...arr1,...arr3];//bes method
console.log(arr1);
console.log("\n");
// Looping an array
arr1=['amrit','vinod','vikas','mohan'];
// 
// use const for creating array
//always use const where you are dealing with reference data type in javascript

const user=['a','m','r','i','t'];
user.push('d');
console.log(user);


// for of loop in an array

const num=[1,2,3,4,5,6,7,8,9];
for(let val of num)
{
    console.log(val);
}