import Person from "./Person";

export default class Student extends Person {
  constructor(name, className) {
    super(name);
    this.name = name;
    this.className = className;
  }

  study = () => {
    console.log(`${this.name} is moving`);
    console.log(`${this.name} is studying in ${this.className}`);
  };
}
