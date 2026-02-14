//passing function as a arguments without callback function

// function myFun(a,b,operation)
// {
//    console.log(a,b);
//    operate(a,b);
   
// }
// function operate(a,b)
// {
//     console.log(a,b);
//     console.log("The resultant is:");
// console.log(a*b);
// }

function myFun(a,b,callback)
{
   console.log(a,b);
   callback(a,b);
   
}
function operate(a,b)
{
    console.log(a,b);
    console.log("The resultant is:");
console.log(a*b);
}
myFun(10,15,operate);
