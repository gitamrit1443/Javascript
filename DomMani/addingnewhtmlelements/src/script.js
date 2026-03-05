const listItem=document.querySelector(".nav-items");
const newListItem=document.createElement("h1");
const Item=document.createElement("h1");
newListItem.textContent="Before Tag";
Item.textContent="AfterTag";
listItem.before(newListItem);
listItem.after(Item);
console.log(listItem);
//certain more methods to add html elements
const Items=document.querySelector(".header")
Items.insertAdjacentHTML("beforeend","<h3>NewEra</h3>")
// Cloning Nodes in js
const ul=document.querySelector(".nav-items");
const copyUl=ul.cloneNode(true);
ul.append(copyUl);
