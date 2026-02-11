const myFun=(arr)=>
{
    let mx=-1;
    for(let val of arr)
    {
        mx=(mx>val)?mx:val;
    }
    fun();
 return mx;
}
const fun=()=>
{
    console.log("This is a fun scope");
}
let myArr=[15,30,12,46,88,46,55,20,46,77,31];
let res=myFun(myArr);
console.log(res);