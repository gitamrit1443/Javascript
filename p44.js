// Map in js
const person=new Map();
person.set('Name','Amrit');
person.set('age',7);
person.set(1,'one');
console.log(person.get('Name'));
// for(let [val,key] of person)
// {
//     console.log(`The key is:${val},and corresponding value is:${key}`);
// }
// or
for(let keys of person.keys())
{
  console.log(`${keys}=>${person.get(keys)}`);
}
console.log(person);
person.forEach((key,val)=>console.log(key,val));
const userInfo={
    id:1,
    firstName:"Amritpal",
    department:"Computer Science And Engineering"
}
const info=new Map();

console.log(info);