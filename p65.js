class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log("Eating");
  }
}
class Dog extends Animal {
  sound() {
    console.log(this.name,"Woof");
  }
}
class Cat extends Animal {
  sound() {
    console.log(this.name,"Meow");
  }
}
const cat=new Cat("Sedan");
cat.sound();

class Lion extends Animal{
    constructor(name,age,speed)
    {
        super(name,age);
        this.speed=speed;
        
    }
    run()
    {
      super.sound();
        return `${this.name} is running at speed of ${this.speed}kmph`;
    }
}
const l=new Lion("sheru",12,45);
console.log(l.run());

