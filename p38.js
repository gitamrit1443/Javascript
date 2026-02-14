//filter method
"use strict";
const number=[4,5,6,3,2,1,0,2,9,4];
// filtering odd number from an Array
const newArray=number.filter((num)=>{return num%2!=0;});
newArray.forEach((val)=>{console.log(val);});

//*************Reduce Method*********/
const arr=[1,2,5,4,5,3,1,1,6,7,9,7,6,12,77,65];

const uniqueIndex=arr.reduce((acc,curr,idx,originalArr)=>{
    if(originalArr.indexOf(curr)===idx){
        acc.push(idx);}
    return acc;
},[]);
console.log(uniqueIndex);

// maximum element in an array using reduce
const Max=arr.reduce((acc,curr,idx,originalArray)=>{
        return (curr>acc)?curr:acc;
});
console.log(Max);
//total sum of an array

const myArr=[1,2,3,4,5,10];
const sum=myArr.reduce((acc,curr)=>{return acc+curr});
console.log(sum);

// Accumulator,currentValue,(return curr+acc)
// 1              2                  3
// 3              3                  6
// 6              4                  10
// 10             5                  15
// 15             10                 25     


const userCart=[
    {productId:1,productName:"Camera",price:122000},
    {productId:2,productName:"Laptop",price:70000},
    {productId:3,productName:"Suitcase",price:5432},
]
const total=userCart.reduce((totalPrice,currPrice)=>
{
  return totalPrice+currPrice.price;
},0);//0 is a initial value
console.log(total);

