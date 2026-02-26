//Getters and Setters in Js
// specials function that are used to read or modify the values in a cclass
class Person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    set Data(val)
    {
        if(val<=0) 
            {
                console.log("Invalid /Wrong Age");
            }
        else 
            {
                this._age = val;
            }
    }
    get Data()
    {
      console.log(this._age);
    }
}
const p=new Person("Amrit",22);
p.Data=21;
p.Data=-5;
p.Data;