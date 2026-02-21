//classes in js
// classes in js are special function that internally works same as functions 
class User{
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
    }
    about(){console.log(`The user is${this.name},age is${this.age}`);}

}
const Users=[
    new User("Amrit",28,"amritsingh1@33.com"),//without new class constructor is not inoked
    new User("karan",18,"karansingh1@33.com"),
    new User("kartikk",58,"kartiksingh1@33.com"),
];
for(let user in Users)
{
    user.about();
}
