// iterables and array like objects

const str="AmritpalSiingh";
for(let val of str)
{
    console.log(val);
}

// Sets in javascript

const numbers=new Set([1,2,3,4,5,7,6,43,3]);
console.log(numbers);
console.log(typeof(numbers));
const strings=new Set();
strings.add("AmritpalSingh");
strings.add("Vedant Bhandari");
strings.add("Karan Verma");
strings.add("Naman Saini");
strings.add("Aryan Singh");
console.log("Displaying Results");
let checkValue=strings.has("Shivani");
console.log(checkValue);
for(let val of strings)
{
    console.log(val);
}
console.log(strings.size)
let deletedValue=strings.delete("Vedant Bhandari");
console.log(`The deleted value is:${deletedValue}`);
strings.forEach(value=>console.log(value));
// let arr=[...strings];
let arr=Array.from(strings);//cloning  a set into array
console.log(arr);
strings.clear();
console.log(strings);
// in realife example you can make a set of product ids in ecommerce sites
