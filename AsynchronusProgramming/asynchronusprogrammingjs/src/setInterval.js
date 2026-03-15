// clearTimeout->cancel scheduled timeout
console.log("Start");
function Timer(){
for(let i=0;i<5;i++)
{
  console.log("Mid");
}
}
const timerId=setTimeout(Timer,3000);
clearTimeout(timerId);
console.log("TimerCancelled Sucessfully");

console.log("End")
//setInterval-> repeats timeout after a certain seconds
console.log("script start")
// setInterval(()=>{console.log(Math.random())},1000)
console.log("Script end")
