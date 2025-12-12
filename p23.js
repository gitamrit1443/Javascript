//***Computed Properties***
const  key1="objkey1"
const key2="objkey2";
const val1="objval1";
const val2="objval2";
const object={
    [key1]:val1,//
[key2]:val2
};

// console.log(object);

// ***Spread operator***

const myArr=[1,2,3,4,5,6,7,8,9];
let myNewArr=[...myArr];
const arr=[..."123456789"];// same cannot be done with numbers because they are not iterable
console.log(arr);

console.log(myNewArr);//studies previously

// $$its use cases in array  are cloning and concatenation of two arrays and object are 

const obj1={
    key1:"value1",
    key2:"value2",
    key1:"value3"
}
const obj2={
    key1:"value9",
    key3:"value4",
    key4:"value5"
}
const newObject={...obj1,...obj2,key99:"value77"};
console.log(newObject);
//in object same key donot  occur  in one object and last occurence will become its value
// const alpha={..."abcdefghijklmnopqrstuvwxyz"};
for(let keys in alpha){
    console.log(keys,":",alpha[keys]);
  }

// ***Object Destructuring in javscrippt***

const band={
    bandName:"led zepllin",
    famousSong:"stairway to heaven"
}
// const bandName=band.bandName;
// console.log(bandName);







