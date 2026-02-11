// hoisting in javascript means moving declarations to the top of the code before running it
console.log(sayHi());
function sayHi()
{
    return "This is a sayHi function";
}
console.log(i);// undefined
var i=20;
console.log(i);

console.log(isEven);//error
const isEven=num =>{
    return num%2==0;
}
