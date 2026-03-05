let parent=document.getElementById("menu");
console.log(parent.children);
console.log(parent.children[0])
for(let child of parent.children)
{
    child.style.color="red";
    child.style.backgroundColor="aqua";
    child.style.fontWeight="bold";
}
const Todoitem=document.querySelector("menu");
console.log(Todoitem.innerHTML)