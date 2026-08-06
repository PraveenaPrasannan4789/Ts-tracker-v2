// Basic Class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const p1 = new Person("Praveena", 24);
console.log(p1.greet());

// =======================================
// Access Modifiers
// =======================================

class Employee {
  public name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

const emp = new Employee("John", 50000);
console.log(emp.name);
console.log(emp.getSalary());
// console.log(emp.salary); Error
