// object are the reference type data structure which is used to represent real world data in the form of key and value pairs ,objects dont have index

const person={name:"Amrit",age:22,hobbies:["guitar","dancing","listening","singing"]};
console.log(person);
console.log(typeof(person));

// *** how to acess data with the help of key in objects***

console.log(person.name);
console.log(person.age);
console.log(person["name"]);
// console.log(person.hobbies);
for(let val of person.hobbies)
{
    console.log(val);
}

// ***how to add new key value pair in objects***


// person.gender="Male";
// person.interest=["technology","innovation","Advance Science"];
// console.log(person);
person["gender"]="Male";
console.log(person);

// ***Difference between dot and bracket notation***
// $$difference1
const user={
    name:"Subham",
    location:"Dehradun",
    "location pincode":248008,
}
// console.log(user.location pincode);

console.log(user["location pincode"]);

// $$difference2
const key="email";
// user.key="amritpal.singh2023@outlook.com"; displays error
//   key: 'amritpal.singh2023@outlook.com' output but we want email as a output so thisis done with help of brackket notation


user[key]="amritpal.singh2023@outlook.com";
// email: 'amritpal.singh2023@outlook.com'output as we want


console.log(user)
// $$difference3
//  while iterating  over objects we generally use bracket because dot find where key is present in the object lets take example

for(let item in person)
{
    // console.log(person.item);error undefined to all kkeys
    // console.log(person[item]);//displays all the keys values
    // console.log(`${item}:${person[item]}`);
    console.log(item,":",person[item]);
}

// ***object.keys method in Object***

console.log(Object.keys(user))//returns all the keys of the user object