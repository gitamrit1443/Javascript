// get multiple items using getElements by class name
// get multiple items intems querSelectorAll
const items=document.getElementsByClassName("nav-items");
// console.log(items[2].innerText);
console.log(items[2]);
const items2=document.querySelectorAll(".nav-item");
console.log(items2[2].innerText);
console.log(items2[2]);
console.log(Array.isArray(items));
// items.forEach((item)=>{console.log(items.style.color="red");});cannot use because they are not arrays
