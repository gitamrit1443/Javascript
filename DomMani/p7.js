// innerHTML method
// suppose you have write a div tag inside dig tag you have create a form so that form is a innerhtml
const headline=document.querySelector(".headline");
headline.innerHTML="<h1> Inner Html Changed</h1>";
// suppose you want to adda button in div so you can use inner html
headline.innerHTML+="<button>Learn More</button>";
console.log((headline.innerHTML))