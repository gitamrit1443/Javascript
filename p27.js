// your code goes here


// ***function in javascript***

// functions are resuable block of code that perorm some specific task

function greet()
{
    console.log("Siayonara");
}

// write a program to add three numbers

function AddMoreThanTwo(a,b,c)
{
    let res=Add(a,b);
    return Add(res,c);
}
function Add(a,b)
{
    return a+b;
}
let a=10;
let b=20;
const res=Add(a,b)
console.log(res);
greet();
// greet();
// greet();
console.log(AddMoreThanTwo(10,10,10));

//write  a program to print true if num is even and false if number is odd

function isEven(num)
{
    if(num%2===0) return true;
     return false;
}
function isOdd(num)
{
    return num%2===0;
}
let num=95;
console.log(isOdd(num));