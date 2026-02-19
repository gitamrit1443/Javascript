// optimization of  p53.js file
function createUser(firstName,lastName,email,age,address)
{
    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.address=address;
    return user;
}
createUser.prototype.about= function() {return `${this.firstName} is ${this.age} years`;};
createUser.prototype.is18= function(){ return this.age >= 18;};
 createUser.prototype.hobby=function(){ return ["Guitar","Travelling","Coding"];};
console.log(createUser.prototype)
const user1=createUser("Amritpal","Singh","amritsingh@gmail.com",28,"BalColony Varanasi");
console.log(user1);
const is18=user1.is18();
if(is18) console.log("User can vote");
else console.log("User cannot vote");