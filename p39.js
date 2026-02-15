// sort in javascript

const numbers=[1,500,40,77,60,13,5,44,6,2];
console.log(numbers);
numbers.sort();//sorting as a string
console.log(numbers);
// Wrong input

// numbers.sort((a,b)=>{
//   return a-b;
// });
numbers.sort((a,b)=>a-b);//anoher way to write this
console.log(numbers);
//arranging cart price from low to high
const cartItems=[
   {producId:1,productName:"Laptop",price:102500},
   {producId:2,productName:"Pendrive",price:3000},
   {producId:3,productName:"Television",price:15000},
   {producId:4,productName:"Watch",price:25000},
   {producId:5,productName:"Sweatshirt",price:9000},
];
console.log("Displaying low to high price")
console.log()
cartItems.sort((a,b)=>a.price-b.price);
for(let val of cartItems)
{
    console.log(`${val.producId},${val.productName},${val.price}`);
}
//high to low
console.log()
console.log("Displaying High to low price");
cartItems.sort((a,b)=>b.price-a.price);//descening ordder
for(let val of cartItems)
{
    console.log(`${val.producId},${val.productName},${val.price}`);
}


//******************Find Method in an array ************/
let arr=[5,10,15,20,25,30];
let res=arr.find(num=>num>10);
let factOf2=arr.find(num=>(num%2==0));
console.log(res);
console.log(factOf2);
const myArray=["Amrit","karan","Sunil","Vardhman"];
let ans=myArray.find((Name)=>Name.length>=5);
console.log(ans)