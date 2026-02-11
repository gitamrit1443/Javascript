// default parameters and res parameters
// b=20 is a defaut parameter and ...c is a rest parameters which can accept n number of arguments

function addTwo(a,b=20,...c)
{console.log(typeof(c))
    return a+b+c;
}
let res=addTwo(5,6,7,8,9,1,2,3,4,5,6,7,8,9,6,4);
console.log(res);