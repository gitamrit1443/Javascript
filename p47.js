// optional chaining
let User={
    firstName:"AmritpalSingh",
    // address:{houseNumber:"C/5",locality:"Ramnagar Road",city:"haldwani",country:"India"}
}
console.log(User?.address)
console.log(User?.address?.locality);//cannot read property house number