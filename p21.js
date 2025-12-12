// object are the reference type data structure which is used to represent real world data in the form of key and value pairs ,objects dont have index

const person={name:"Amrit",age:22,hobbies:["guitar","dancing","listening","singing"]};
console.log(person);
console.log(typeof(person));
// how to acess data with the help of key in objects

console.log(person.name);
console.log(person.age);
console.log(person["name"]);
// console.log(person.hobbies);
for(let val of person.hobbies)
{
    console.log(val);
}

// how to add new key value pair in objects


// person.gender="Male";
// person.interest=["technology","innovation","Advance Science"];
// console.log(person);
person["gender"]="Male";
console.log(person);