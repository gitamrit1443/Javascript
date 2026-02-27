console.log(this);
console.log(window);
console.log(myFun);
console.log(fullName);
myFun();
function myFun()
{
    console.log("This is my function");
}
var firstName="Amritpal";
var lastName="Singh";
var fullName=firstName+" "+lastName;
console.log(fullName);
console.log(window.fullName)
console.log(window.myFun);
console.log(myfunction);
var myfunction=function(){console.log("This is a functionn");}
