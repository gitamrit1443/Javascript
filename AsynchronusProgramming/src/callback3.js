const heading1=document.querySelector(".heading1")
const heading2=document.querySelector(".heading2")
const heading3=document.querySelector(".heading3")
const heading4=document.querySelector(".heading4")
const heading5=document.querySelector(".heading5")
const heading6=document.querySelector(".heading6")
const heading7=document.querySelector(".heading7")
setTimeout(()=>{
    heading1.style.color="violet";
    heading1.textContent="One";
    setTimeout(()=>{
        heading2.style.color="purple";
        heading2.textContent="Two";
        setTimeout(()=>{
            heading3.style.color="red";
            heading3.textContent="Three";
            setTimeout(()=>{
                heading4.style.color="pink";
                heading4.textContent="Four";
                setTimeout(()=>{
                    heading5.style.color="green";
                    heading5.textContent="Five";
                    setTimeout(()=>{
                        heading6.style.color="blue";
                        heading6.textContent="Six";
                        setTimeout(()=>{
                            heading7.style.color="brown";
                            heading7.textContent="Seven";
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);