// optimization of  p53.js file
const userMethods={
     about: function() {return `${this.firstName} is ${this.age} years`;},
    is18: function(){ return this.age >= 18;}
}
function createUser(firstName,lastName,email,age,address)
{
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.address=address;
    user.about=userMethods.about;
    user.is18=userMethods.is18;
    return user;
}
const user1=createUser("Amritpal","Singh","amritsingh@gmail.com",28,"BalColony Varanasi");
console.log(user1);
const is18=user1.is18();
if(is18) console.log("User can vote");
else console.log("User cannot vote");