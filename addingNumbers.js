// practise of rest parameters
function myFun(a,b,...c)
{
    let sum=0; 
    sum=a+b;
for(let val of c)
{
    sum+=val;
}
return sum;
}
let res=myFun(4,5,6,1,2,3);

console.log(res);