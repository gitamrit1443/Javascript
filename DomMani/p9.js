//Task is to go to h1 tag using dom traversing and then change its text colour as blue
const h1=document.querySelector("h1");
const h1Parent=h1.parentNode;
h1Parent.style.color="#333";
h1Parent.style.backgroundColor="aqua";
h1Parent.style.fontWeight="bold";
const body=h1Parent.parentNode;
body.style.backgroundColor="whitesmoke"
const head=document.querySelector("head");
console.log(head)
const title=head.querySelector("title");
console.log(title.childNodes);
const container=document.querySelector(".container")


