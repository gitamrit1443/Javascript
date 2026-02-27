// function execution context
let foo="foo";
console.log(foo);
function getFullName(fName,lName)
{
    console.log(arguments);
    let myVar="var inside function";
    console.log(myVar);
    const fullName=fName+" "+lName;
    return fullName;
}
const person=getFullName("Amritpal","Singh");
console.log(person);

// lexical Envioument and Scope Chain
const lastName="Singh";
const printName=function(){
    const firstName="Amrit";
    console.log(firstName);
    console.log(lastName);
}
printName();