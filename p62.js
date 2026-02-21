// has own property of js
// it is a property which tells property of object is its own or being inherited by prototype
const user={
    name:"Amritpal",
    age:28
}

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("toString"));

function User(name,age) {
  this.name = name;
  this.age=age;
}

User.prototype.greet = function() {
  console.log("Hello");
};

const u1 = new User("Amrit",28);

console.log(u1.hasOwnProperty("name"));   // true
console.log(u1.hasOwnProperty("greet"));  // false