const obj1={
    key1:"value1",
    key2:"value2"
}
const obj2={
    key3:"value3"
}
console.log(obj2.key1);//undefined here we want that js ensures that 
// key 1 is present in obj2 if not then goto change scope and 
// find in obj1
// another way to create empty object crreate wali line se obj2 ka proto object 1 bnra tha
const obj3=Object.create(obj1);
console.log(obj3);
console.log(obj3.key2);
console.log(obj3.__proto__);
console.log(obj3);
// output for line 16 in console [[Prototype]]:Object
