// adding new keyword in p50.js to automate creating chains and relations
// optimization of  p53.js file
function createUser(firstName,lastName,email,age,address)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.email=email;
    this.address=address;
}
createUser.prototype.about= function() {return `${this.firstName} is ${this.age} years`;};
createUser.prototype.is18= function(){ return this.age >= 18;};
 createUser.prototype.hobby=function(){ return ["Guitar","Travelling","Coding"];};
console.log(createUser.prototype)
const user1=new createUser("Amritpal","Singh","amritsingh@gmail.com",28,"BalColony Varanasi");
const user2=new createUser("Anshuman","Sharma","anshu@gmail.com",28,"Balram choowk kathihar");
console.log(user1.__proto__===user2.__proto__);//all users have same proto
console.log(user1);

const is18=user1.is18();
if(is18) console.log("User can vote");
else console.log("User cannot vote");
console.log(user1.__proto__===is18.prototype);