// closures
function func()
{
    let counter=0;
    return function()
    {
        if(counter<1)
        {
            console.log("Hi you called me",counter);
            counter++;
        }
        else
        {
            console.log("You have already called me",counter);
        }
    }
}
const myFunc=func();
myFunc();
myFunc();
const myFun2=func();
myFun2();
myFun2();