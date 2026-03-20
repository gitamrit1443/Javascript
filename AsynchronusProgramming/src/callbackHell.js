//callbackk hell is a situation where we have multiple nested callbacks, which can make our code difficult to read and maintain. 
// It often occurs when we have asynchronous operations that depend on the results of 
// previous operations.
const heading1=document.querySelector(".heading1")
const heading2=document.querySelector(".heading2")
const heading3=document.querySelector(".heading3")
const heading4=document.querySelector(".heading4")


// setTimeout(()=>{heading1.style.color="red";
//     heading1.textContent="Heading 1";
// },1000)
// setTimeout(()=>{heading2.style.color="green";
//     heading2.textContent="Heading 2";
// },2000)
// setTimeout(()=>{heading3.style.color="blue";
//     heading3.textContent="Heading 3";
// },3000)
// setTimeout(()=>{heading4.style.color="aqua";
//     heading4.textContent="Heading 4";
// },4000)

//in this code we have 4 setTimeout functions nested inside each other, which can make it difficult to read and maintain. 
// to run it in order we ned to keep rack of time that is hard to manage
setTimeout(()=>{
    heading1.style.color="red";
    heading1.textContent="Heading 1";
    setTimeout(()=>{
        heading2.style.color="green";
        heading2.textContent="Heading 2";
        setTimeout(()=>{
            heading3.style.color="blue";
            heading3.textContent="Heading 3";
            setTimeout(()=>{
                heading4.style.color="aqua";
                heading4.textContent="Heading 4";
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);