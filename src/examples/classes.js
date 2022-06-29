class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  calculateAge() {
    return new Date().getFullYear() - this.year;
  }
}

class Student extends Person {
  constructor(name, year, studentNumber) {
    super(name, year);
    this.studentNumber = studentNumber;
  }
}

class Teacher extends Person {
  constructor(name, year, department) {
    super(name, year);
    this.department = department;
  }
}

const p1 = new Person("Ege", 2000);

const st1 = new Student("Ali", 1999, 12);

const teacher = new Teacher("Fuat", 1975, "Physic");

console.log(p1.calculateAge());
console.log(st1.name + "'nin yasi: " + st1.calculateAge());
console.log(
  teacher.name +
    "'nin yasi : " +
    teacher.calculateAge() +
    " ve " +
    " departmani " +
    teacher.department +
    "'dir."
);
