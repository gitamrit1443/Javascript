const buttons=document.getElementsByTagName("button");
console.log(buttons);
// for(let button of buttons)
// {
//     button.addEventListener("click",()=>{
//         console.log("You Clicked Me")
//     });
// }
Array.from(buttons).forEach(function(e)
{
    e.addEventListener("click",function(){console.log(this.textContent);})
    //now our task is to print text content of buttons
})
//Event object
const Buttons=document.getElementsByTagName("button")[0];
Buttons.addEventListener("click",function(e){
    console.log(e);
     console.log(e.target);
     console.log(e.currentTarget);
});

