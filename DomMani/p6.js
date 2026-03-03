// All nav items text colour changes how to do it g HOME,signup,todo link
let items=document.getElementsByTagName("a");
console.log(items);
// to change Colour of text you can use simple for loop,for of loop but not forEach loop
// in array like object you can use indexing and length property to calculate its length
// for(let item of items)
// {
//   console.log(item);
//   item.style.backgroundColor="red";
//   item.style.color="blue";
//   item.style.fontWeight="bold";

// }
// to use forEach loop you need to create an array which contains HTML collection and then you can use forEach loop
// Array.from(items).forEach(item=>{
//     item.style.backgroundColor="red";
//   item.style.color="blue";
//   item.style.fontWeight="bold";
// });
// using querysellectorall
const navItems=document.querySelectorAll("a");
console.log(navItems);
// in querySelectorAll you can use all for loopsof ,simplefor,forEach
navItems.forEach(item=>{
     item.style.backgroundColor="green";
   item.style.color="blue";
   item.style.fontWeight="bold";
})
console.log(Array.isArray(navItems))