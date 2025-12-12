let age=17
// ternary operator:syntx
// (condition)?truecondition:falsecondition
let can_vote=(age>=18)?"You can vote":"You cannot vote";
console.log(can_vote);
let num=10
let even_odd=(num%2==0)?"The number is even":"The number is odd";
console.log(even_odd);
let name="Amrit";
if(name[0]=="A" && age>18)
{
    console.log(`Your name is:${name} and Your age is:${age}`);
    console.log("Inside if condition");
}
else{
    console.log(`Your name is:${name} and Your age is:${age}`);
    console.log("Inside else condition");
}
name="mohit";
age=42;
if(name[0]=="A" || age>18)
{
    console.log(`Your name is:${name} and Your age is:${age}`);
    console.log("Inside if condition");
}
else if(name)
{
    console.log("Name has some value it is not defined");
}
else{
    console.log(`Your name is:${name} and Your age is:${age}`);
    console.log("Inside else condition");
}

