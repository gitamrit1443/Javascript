//modification using dom manipulation
// changing text,text contnt and inner Text
const mainHeading=document.getElementById("main-heading");
console.log(mainHeading.textContent);
// mainHeading.textContent="DomManipulation";
console.log(mainHeading.innerText);
mainHeading.innerText="DomManipulation";
console.log(mainHeading.innerText);

