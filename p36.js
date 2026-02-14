"use strict";
// important array methods forEach,map,filter,reduce
//******************forEach ****************/
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
numbers.forEach(function(num,index)
{
    console.log(`index is ${index} and ${num}^2 is:${num*num}`);
});

const users=[{Name:"AmritpalSingh",age:21},
             {Name:"Vedant",age:24},
             {Name:"Sunil",age:22}
]
users.forEach((user,index)=>
{
console.log("Presented at index",index);
console.log("User Name is:",user.Name);
console.log("User age is:",user.age);
});
// here square becomnes anonymous function

// ***************map***************

const num=[1,4,5,6,2,8,2];
const res=function(num)
{
  return num*num;
}
const ans=num.map(res);
// res(num);
console.log(ans);//takes callback function as a argument
//Suppose you have an price array which include price of different items now you 
// wan to add 20% tax(multiply each item by 1.2)and display modified /updated price as an output
const price=[100,500,700,200,400,750];
console.log("The old price is:");
// price.forEach(function(price){console.log(price);})
const updatedPrice=price.map((Price)=>{return Price*1.2});
console.log("The Updated Price is:");
// updatedPrice.forEach(function(price){console.log(price);})
price.forEach((price,index)=>
{
   console.log(`The old price was${price} and updated price is:${updatedPrice[index]}`);
});
const user=[
    {firstName:"Amritpal Singh",age:23},
    {firstName:"Karan Verma",age:21},
    {firstName:"Neha Jaiswal",age:23},
];
const info=user.map((person)=>{return person.firstName});
info.forEach((Print)=>{console.log(Print);})

// ************FILTER************
// IN FILE P38.JS
