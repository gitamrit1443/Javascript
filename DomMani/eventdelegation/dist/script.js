"use strict";
const lists=document.getElementsByClassName("my-list")
for(let list of lists)
{
list.style.backgroundColor="aqua";
list.style.padding="20px";
console.log("Background color set sucessfully");
 list.addEventListener("click",function(event){
if(event.target.tagName==="LI")
{
  console.log("You Clicked a List Tag",event.target.innerText);
  event.target.style.backgroundColor = "lightgreen";
}});

}