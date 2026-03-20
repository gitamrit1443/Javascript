function getTwoNumbersAdd(num1,num2,onSucess,onFailure)
{
    if(typeof num1==="number" && typeof num2=== "number")
    {
        onSucess(num1,num2);
    }
    else
    {
        onFailure();
    }
}
let num1=prompt("Enter first number");
let num2=prompt("Enter second number");
getTwoNumbersAdd(Number(num1),Number(num2),(num1,num2)=>{console.log(num1+num2)},()=>{console.log("Please provide valid numbers")});