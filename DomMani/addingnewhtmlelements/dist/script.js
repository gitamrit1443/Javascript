const listItem=document.querySelector(".nav-items");
const newListItem=document.createElement("h1");
const Item=document.createElement("h1");
newListItem.textContent="Before Tag";
Item.textContent="AfterTag";
listItem.before(newListItem);
listItem.after(Item);
console.log(listItem);