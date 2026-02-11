// Default parameters and Rest Parameters
const studentInfo=(userName,...skills)=>
{
//   console.log(userName);
//   console.log(skills);
//   console.log(typeof(skills));
// printing using string templates
console.log(`The userName is:${userName} and user skills are:${skills}`);
}
const myfun=(myName="User")=>
{
    console.log("Hello"+myName)
}
myfun();//here hello undefined is ann output
console.log("After giving input to value");
myfun("TravelWithAmrit");
studentInfo("TravelWithAmrit","JS","React","Node","Nest","Typescript");
studentInfo("Mohit","Angular","SpringBoot");

