// promises is representing that some value may be available now, or in the future, or never
// a promise is in one of three states: pending, fulfilled, or rejected
// a promise is settled if it is either fulfilled or rejected
const my_promise=new Promise((resolve,reject)=>
{
    let submit=true;
    if(submit)
    {
        resolve("Code has been submitted sucessfully")
    }
    else
    {
        reject("Code has been Rejected");
    }
});