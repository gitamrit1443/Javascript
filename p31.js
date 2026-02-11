// Recursion in javascript
function myfun(n)
{
    if(n<=1) return 1 ;
    console.log(n);
    return myfun(n-1);
}
n=10;
console.log(myfun(n));