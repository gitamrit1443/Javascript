// new keyword in javascript

function createUser(name,age)
{
    this.name=name;
    this.age=age;
}
createUser.prototype.about=function(){console.log(`${this.name},${this.age}`);}
const user1=new createUser("Harry",6);
console.log(typeof(user1))
user1.about()
