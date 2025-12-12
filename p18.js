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
[].concat(arr1);
[].concat(arr2);
console.log(arr2);