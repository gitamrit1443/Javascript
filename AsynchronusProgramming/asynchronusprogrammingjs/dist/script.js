//Synchronus programming->(ek kaam khatam hoga tb hi dusre ko time milega but it will block futher code that can be completed just in less time)
// eg fetching  user from backend language it tae time while fetching in synchonus manner any button will not clicked till fetching will not done and page will not load)
for(let i=0;i<100;i++)
  {
    console.log("Inside for Loop");
  }
console.log("Script End");
//Asynchronus Programming in JS 
// setTimeout()
console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

console.log("End");
console.log("Script End");
//Asynchronus Programming in JS 
// setTimeout()
console.log("Start");
const res=setTimeout(() => {
  console.log("Hello after 0seconds");
},0);

console.log("End");
console.log(typeof(ret));
console.log(ret);