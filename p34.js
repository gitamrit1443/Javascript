"use strict";
//callback functions are used to pass function as a parameter
const myFun=()=>
{
    console.log("This is myFun function");
    //you need to call that function but if you pass function from main then we use call function
    myFun2(10);
}
const myFun2=(a)=>
{
    console.log(a)
}
myFun();
//using callback functions
function greet(callback)
{
callback();
}
function Hi()
{
console.log("Hi");
}
function Bye()
{
console.log("Bye");
}
greet(Hi);
greet(Bye);