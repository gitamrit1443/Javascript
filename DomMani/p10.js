const sectionTodo=document.querySelector(".section-todo");
console.log(sectionTodo)
//to determine how many classes section to do have we use classList property
console.log(sectionTodo.classList)
 sectionTodo.classList.add('bg-dark')//adding class
 sectionTodo.classList.remove('bg-dark') //removing class
console.log(sectionTodo.classList.contains('bg-dark'));//checking whether class is present or not
sectionTodo.classList.toggle('bg-dark');//adds if not present and removes if present 
console.log(sectionTodo.classList.contains('bg-dark'));
// Practising class List
const header=document.querySelector("header");
console.log(header.classList)

header.classList.add('bg-dark');
header.classList.remove('bg-dark');
let checkVal=header.classList.contains('bg-dark');
console.log(checkVal);
header.classList.toggle('bg-dark');
checkVal=header.classList.contains('bg-dark');
console.log(checkVal);
