// callback or pyramid of dom problem

// function getData(dataId,getNextData)
// {
//   setTimeout(()=>{console.log("data:",dataId)
//                   if(getNextData)
//                   {
//                       getNextData(dataId)   
//                   }
//     },1000);
// }
// getData(1,()=>{
//   getData((2),()=>{
//     getData((3),()=>{
//       getData((4),()=>{
//         getData((5),()=>{
//           getData(6);
//         });
//       });
//     });
//   });
// });
// pyramid of dom problem is a situation where we have to do multiple asynchronous operation one after another and we have to wait for 
// the previous one to complete before starting the next one.

//  This leads to a situation where we have to write nested callbacks which makes our code difficult to read and maintain. 
//  This is called callback hell or pyramid of dom problem. 

// To solve this problem we can use promises or async/await which makes our code more readable and maintainable.


// **********************Promises***********************



// let mypromise=new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     resolve("Sucess")//created by js internally
//     reject("Some Error Occured")
// })
// console.log(mypromise)
        
// function getData(dataId,getNextData)
// {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data:",dataId)
//       resolve("Sucess");
//       if(getNextData)
//       {
//         getNextData(dataId);
//       }
//     },2000);
//   });
// }
// // 
// getData(1)
// .then((res)=>{return getData(2);})
// .then((res)=>{return getData(3);})
// .then((res)=>{return getData(4);})
// .then((res)=>{return getData(5);})
// .then((res)=>{return getData(6);})
// .catch((err)=>{console.log(err);});


// const  getPromise=()=>{
//  return new Promise((resolve,reject)=>{
//     console.log("I am a Promise")
//     let success=false;
//     if(success)
//     {
//       resolve();
//     }
//     else
//     {
//       reject();
//     }
   
// });
// }
//  function onSuccess()
//     {
//       console.log("Promise Resolved");
//     }
//     function onRejection()
//     {
//       console.log("Prmoise Rejected");
//     }
    
// const promise=getPromise();

// promise
// .then(onSuccess)
// .catch(onRejection);


// ****************************Async/Await***********************
// async function Hello()
// {
//   console.log("I am an async function");
// }
// Hello()

function getData(dataId,getNextData)
{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data:",dataId)
      resolve("Sucess");
      if(getNextData)
      {
        getNextData(dataId);
      }
    },2000);
  });
}
const fetchData=async () => {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5);
  await getData(6);
  
  
}
fetchData()