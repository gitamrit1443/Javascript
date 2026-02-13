// Function returning function
const myFun=()=>
{
 const printHello=()=>
 {
    console.log("Hello Amrit");
 }
 return printHello;
}
const ans=myFun();
console.log(ans);//here ans becomes function named printHello
ans();
const FUNC=()=>
{
    return function()
    {
        return "hello World"
    }
}
const res=FUNC();
console.log(res());