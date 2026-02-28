// closures exercises
function hello(x)
{
    const a="varA";
    const b="varB";
    return function(){console.log(a,b,x);}
}
const ans=hello("arg");
ans();
ans=null;//toh destroy the closure and free up memory, we can set the variable to null. This will allow the garbage collector to reclaim the memory used by the closure.