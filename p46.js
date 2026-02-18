// cloning an object

const obj={
    key1:"value1",
    key2:"value2"
}
const myOb=obj;
const obj2={...obj};
const obj3=Object.assign({},obj);
obj.key3="value3";
console.log(myOb);//if any key value pair is added in obj it will also reflect in myObj because pointing to same memory
console.log(obj2);
// if any key value pair is added in obj it  doest reflect in myObj 
// or

console.log(obj3)

