const user={
    firstName:"Ankit Verma",
    age:8,
    about:()=>{console.log(this);
        console.log(this.firstName,this.age)}
}
user.about();
// output will be undefined undefined because arrow function
// is not binding this to user object .
// it is taking this from outer global scope and that scope 
// doesnot hav firstName or age
// always use normal function with this keyword
