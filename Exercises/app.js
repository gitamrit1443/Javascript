import createUser ,{Info}from "./createUser.js";
createUser.prototype.about=function(){console.log("This is a functional prototype");}
// createUser.prototype.displayInfo=function(){console.log(`${this.name},${this.age}`);}
const user1=new createUser("Amritpal",28);
const user2=new createUser("Vedant",29);
user2.about();
user1.about();
user1.displayInfo();
user2.displayInfo();
user1.Info();