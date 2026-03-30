const getMyData=async () => {
    const response=await fetch("https://api.github.com/users/gitamrit1443");
   const data=await response.json()
   console.log(data);
    
}
getMyData();