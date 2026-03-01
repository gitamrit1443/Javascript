// 
const multiply=(x)=>{
    return function(y)
    {
        console.log(x*y);
    }
}
let output=multiply(3);
output(4);
output(5);
output=null;