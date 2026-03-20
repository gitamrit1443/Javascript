//understanding callbacks in js
//a callback is a function that is passed as an argument to another function and is executed after some operation is completed.
//  It allows us to handle asynchronous operations in JavaScript.
function sayHello(name)
{
    console.log(`Hello,${name}!`);
}
function userInput(callback)
{
    let name=prompt("Please enter your name:");
    callback(name);
}
userInput(sayHello);
// function fetchData()
// {
//     let name=prompt("Please enter your name:");
//     return name;
    
// }
// let name=fetchData();
// console.log(`Hello,${name}!`);