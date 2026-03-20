const body=document.body;
const button=document.querySelector('button');
console.log(button);
const timerId=setInterval(()=>{
    const red=Math.floor(Math.random()*126);
    const blue=Math.floor(Math.random()*126);
    const green=Math.floor(Math.random()*126);
    const rgb=`rgb(${red},${green},${blue})`;
    console.log(rgb);
    body.style.backgroundColor=rgb;
    },1000);
    button.addEventListener('click',()=>{clearInterval(timerId);
        button.textContent=body.style.backgroundColor;
    });
    console.log(timerId);
