"use strict";
let i=+0;
while(i<11)
{
    console.log(i);
    i++;
}
console.log(typeof(i),i);
// 11 is the last value of i and its type is number
// write a program to write a sum of first n natural number
let n=+5;
let sum=+0;
 i=0;
while(i<=n){
sum+=i;
i++;
}
console.log(i);
console.log(`The sum of the first n natural number is:${sum}`);
console.log(`The sum of the first n natural number is:${(n*(n+1))/2}`);