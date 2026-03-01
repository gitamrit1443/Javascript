// get and set attribute in js
const firstLink=document.querySelector("a");// here href inside a is aa attribute a is achor tag
console.log(firstLink);
console.log(firstLink.getAttribute("href"));//#home
//if ou want to set a lin you can use set attribute
firstLink.setAttribute("href","www.pexels.com");
console.log(firstLink.getAttribute("href"));

