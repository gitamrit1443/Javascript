// primitive vs reference data type
// your code goes here
//  primitive vs reference data Type

let num1=6;
let num2=num1;
console.log("value of num1 is:",num1);
console.log("value of num2 is:",num2);
num1++;
console.log("value of num1 is:",num1);
console.log("value of num2 is:",num2);
// primitive datatype->their value is itself kept in memory(stack) and once declared their values cannot be changed they are immutable

//reference datatype->their instance iskept in memory(stack) and value is pointing to heap where actual data is kept and they are mutable even if value is constant


console.log("Reference Data Type");
let myArr=[1,2,3,4,5];
let arr2=myArr;
console.log(myArr);
console.log(arr2);
myArr.push(6);
// arr2.push(9);
console.log(myArr);
console.log(arr2);




