const items=document.getElementsByTagName("li");
console.log(items.length);//4
document.querySelector(".nav-items").append(document.createElement("li"));
console.log(items.length)//5