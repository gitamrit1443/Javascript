// const Todoitem=document.getElementsByClassName("menu");
// console.log(Todoitem);
// const listItems=document.getElementsByTagName("li");
// console.log(Todoitem.classList)
// listItems[3].innerHTML="<li>Newera</li><li>BackToEra</li>";

// console.log(listItems.classList)
// ths is  dangerous way to add element because due to re rednering of html document
const ul=document.getElementsByTagName("li");
const newTodoItem=document.createElement("li");
// const newTodoItemText=document.createTextNode("NewTodoItem");
newTodoItem.textContent="NewTextContent";
// newTodoItem.append(newTodoItemText);
ul.append(newTodoItem);
console.log(ul);
// newTodoItemText.textContent="NewEra";
// console.log(newTodoItem);//NewEra
