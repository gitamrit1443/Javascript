// call apply bind in js
const user={
    firstName:"Amrit",
    age:8,
    about:function(){
        console.log(this.firstName,this.age);
    }
}
const user2={
    firstName:"Mohit",
    age:7,
    
}
user.about.call(user2);//in this we are calling about function of user 1 but variables we are using
//  are of user 2 type i.e this keyword will have
//  user 2 values