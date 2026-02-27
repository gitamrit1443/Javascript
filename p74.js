// closures in Javascript
// prerequisites:function can return function
function outer()
{
    function inner()
    {
        console.log("Hello World");
         
    }
    return inner();
}
const ans=outer();
console.log(ans);
// ans.call();
function printFullName(firstName,lastName)
{
    function printName()
    {
        console.log(firstName+" "+lastName);
    }
    return printName;
}
const res=printFullName("Amritpal","Singh");
res();
console.log(typeof(res));

