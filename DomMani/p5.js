// get multiple items using getElements by class name
// get multiple items intems querSelectorAll
const items=document.getElementsByClassName("nav-item");//returns HTML collection
// console.log(items[2].innerText);
console.log(items[2]);
const items2=document.querySelectorAll(".nav-item");//returns Nodelist
console.log(items2[2].innerText);
console.log(items2[2]);
console.log(Array.isArray(items));
// // items.forEach((item)=>{console.log(items.style.color="red");});//cannot use because they are not arrays
for(let i=0;i<items2.length;i++)
{
    items[i].style.color="red";
}
