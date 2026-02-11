// Block Scope and Function Scope
{
    let var1="Amrit";
    console.log(var1);
}
// console.log(var1); here error comes var 1 not defined
// Another there is a global scope that is whole file is a block ie ou can acess variable within file\

if(true){
    var val="Amritpal";
}
console.log(val);
function myfun()
{
    var myvar=99;
}
myfun();
console.log(myvar);