const getMyData=async () => {
    const response=await fetch("https://api.github.com/users/gitamrit1443");
    const repos=await fetch("https://api.github.com/users/gitamrit1443/repos");
    try {
        if(!response.ok || !repos.ok)
    {
        throw new Error("UserNotFound");
        
    }
else {
    console.log("Data without Json Frmat")
    console.log(response)
    console.log("Data wih json format")
   const data=await response.json()
   const repoData=await repos.json()
   console.log(data.name);
   console.log(data.bio);
   console.log(repoData)
   console.log(typeof(repos))
}
    } catch (error) {
        console.log("Error Occured",error.message);
    }
    finally {
        // 2. Ye HAMESHA chalega. 
        // Alag se try aur catch dono mein setLoading(false) likhne ki zaroorat nahi.
        // setLoading(false); 
        console.log("Fetch attempt finished.");
    }
}
getMyData();
    // handeling race condition occured due to slow internet speed
    // Tune type kiya "A" -> Request 1 gayi (Slow internet).
// Tune jaldi se type kiya "Amrit" -> Request 2 gayi (Fast internet).
// Problem: Request 2 pehle aa gayi aur screen par "Amrit" ka data dikha. Lekin 1 second baad Request 1 ("A") ka data aaya aur usne "Amrit" ke data ko overwrite kar diya.
// Natija: Search bar mein "Amrit" likha hai, par data sirf "A" ka dikh raha hai. Ise hi Race Condition kehte hain.
// }
