let firstName=null;
// here firstName is undefined becoz we have declared it but didn't assign a 
// value so it will considered as a falsy value or undefined for that variable that's why else block runs
if(firstName)
{
    console.log(firstName);
}
else
{
    console.log("firstName is empty");
}