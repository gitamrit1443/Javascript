//livelist
const items=document.getElementsByTagName("li");
console.log(items.length);//4
document.querySelector(".nav-items").append(document.createElement("li").textContent="livelist");
console.log(items.length)//5 auto updation
//static list
const Items=document.querySelectorAll(".nav-items li");
console.log(Items.length);//5
document.querySelector(".nav-items").after(document.createElement("li").textContent="staticlist");
console.log(Items.length);//5
const updatedItems=document.querySelectorAll(".nav-items li");
console.log(updatedItems.length);//6
