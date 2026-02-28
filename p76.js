function myFunction(x){
    return function()
    {
        console.log(x*x*x);
    }
}
let cube=myFunction(3);
cube();
cube=null;//toh destroy the closure and free up memory, we can set the variable to null. This will allow the garbage collector to reclaim the memory used by the closure.