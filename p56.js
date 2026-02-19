// javascript function behaves as a combo of function+object
// example
function hello()
{
    console.log("Hello world");
}
// hello()
console.log(hello.name);//here name is a property that tell us the name of the function
//you can also add your custom properties
hello.myOwnProperty="very unique value";
console.log(hello.myOwnProperty);
//some useful properties eg call,bind,apply