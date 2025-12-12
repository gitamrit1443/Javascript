"use strict";
let n=0;
for(n=0;n<10;n++)
{
    if(n==5)
    {
    //   console.log(n);
    continue;   
    }
     console.log(n); 
}
console.log("Loop 1 here ends\n");
for(let i=0;i<10;i++)
{
   if(i==6)
   {
    break;
   }
   console.log(i);
}