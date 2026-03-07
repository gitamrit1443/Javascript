//how to get dimension of elemet
const ul=document.querySelector(".nav-items");
const info=ul.getBoundingClientRect();//returns object with heigh width
console.log(info);
const height=ul.getBoundingClientRect().height
//events js
// Events in js
// click event there are three ways to add click event
const btn=document.querySelector(".btn");

btn.onclick=()=>{
  console.log("You Clicked Me !!!!!");
}
console.log(btn);
console.dir(btn);
//recommended way
btn.addEventListener("click",()=>{console.log("You Clicked Me"); console.log("Value of this is:"); console.log(this);})
// method addEventListener
// this keyword with action listner
