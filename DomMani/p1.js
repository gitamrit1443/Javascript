// DOM
// browser parse/scans html and searches all the elements and  tags present in it and  repsents it like tree like structure and creates its object called document
console.log(window.document);
console.log(window.document===document);//true
// document is the root element of the html page and now we try to modify the elements using document by id
console.log(typeof(document.getElementById("main-heading")));
const heading=document.getElementById("main-heading");
console.log(heading);
//selecting document b query selector
const heading2=document.querySelector("#main-heading");
console.log(heading2);
const navItem=document.querySelectorAll(".nav-item");
console.log(navItem);