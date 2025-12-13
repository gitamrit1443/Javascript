// Arrow functions in javscript

// Arrow functions are a shorter syntax for writing function expressions


// ***Normal Function***

const sum=function(x,y,z)
{
    return x+y+z;
}
console.log(sum(4,5,6));

// ***Arrow function***

const Add=(a,b,c)=>{
    return a+b+c;
}

console.log(Add(4,5,6));

// If there is only one parameter, we can omit the parentheses
const isEven= num =>num%2===0;
    // return num%2===0;

console.log(isEven(45));

const firstChar=(str)=>str[0];
console.log(firstChar("Javascript"));
