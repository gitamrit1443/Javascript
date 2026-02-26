// Practise on getter and settter
class person
{
    constructor(first,last)
    {
        this.first=first;
        this.last=last;
    }
    get fullName()
    {
        console.log(`${this.first} ${this.last}`);
    }
    set fullName(Name)
    {
        const [first,last]=Name.split(" ");
        this.first=first;
        this.last=last;
    }
}
const p1=new person("Amrit",21);
p1.fullName="Mohit Verma";
p1.fullName;