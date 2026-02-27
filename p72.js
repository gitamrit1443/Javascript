// in case of let and const

console.log(firstName);//error:cannot acess variable firstName before intialization
console.log(myVal);//uncaught reference error
let firstName="Amrit";
const myVal=20;
console.log(firstName);
