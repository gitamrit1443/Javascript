//creating multiple objects and returning it
// const user={
//     firstName:"Amrit",
//     middleName:"Pal",
//     lastName:"Singh",
//     age:21,
//     email:"amrit@gmail.com",
//     address:"HouseNumber ,Colony,Pincode,State",
//     about(){
//         return `${this.firstName} is ${this.age} years`
//     },
//     is18(){
//       return this.age >= 18;
//     }
// }
// const userInfo=user.about();
// console.log(userInfo);
// now suppose you have to create 1000 users so this syntax looks messy so you want o use another way
// you can create function createUser pass value to it and create a object


// create object
//add key value pair 
// object ko return krega
function createUser(firstName,lastName,email,age,address)
{
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.address=address;
    user.about=function() {return `${this.firstName} is ${this.age} years`};
    user.is18=function(){ return this.age >= 18;}
    return user;
}
const user1=createUser("Amritpal","Singh","amritsingh@gmail.com",28,"BalColony Varanasi");
console.log(user1);
const is18=user1.is18();
if(is18) console.log("User can vote");
else console.log("User cannot vote");