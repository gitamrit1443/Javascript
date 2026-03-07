// An exercise in which on click a button color of page will change
const changeColorButton=document.querySelector(".btn");
changeColorButton.addEventListener("click",()=>{
    const changeColorElement=document.querySelector(".card");
    changeColorElement.style.backgroundColor="yellow";
    console.log("Color Changed Sucessfully")
})