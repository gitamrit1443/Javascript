"use strict";
//every method in javascript
const arr=[2,4,6,8,10];
let res=arr.every((num)=>num%2===0)
if(!res)console.log("Number inside an array is odd");
else console.log("All the elements in an array are even");

//Some method in an array

let array=[2,4,8,6,4,3,5,6];
const r=array.some((val)=>val%2!=0);
if(!r) console.log("All the elements in an array are multiple of 2");
else console.log("Element found to be odd in even series");


