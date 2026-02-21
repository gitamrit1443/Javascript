function createUser(name,age){
    this.name=name;
    this.age=age;
}
function Info(){
console.log(`The current user is:${this.name} and age is:${this.age}`);
}
export default createUser;
export function Info(){};//other files can use this function