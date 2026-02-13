"use strict";
// important array methods forEach,map,filter,reduce
const numbers=[1,7,4,5,3,2,9,8,6];

// function multiplyBy2(num,index)
// {
//    console.log("Index is:",index);
//    console.log("Number *2 is:",num*2);
// }

// multiplyBy2(numbers[0],0);//now we have to do it for every element you can use for loop
// for(let i=0;i<numbers.length;i++)
// {
//     multiplyBy2(numbers[i],i);
// }
numbers.forEach(function multiplyBy2(num,index)
{
    console.log(`index is ${index} and ${num}*2 is:${num*2}`);
});
// here multiply by 2 becomnes anonymous function