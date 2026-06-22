interface employee {
  name: string;
  age: number;
}

let person: employee = {
  name: "abc",
  age: 34,
};

console.log("person", person);

//optional
interface employee1 {
  name?: string;
  age: number;
}
//readonly

interface employee2 {
  readonly name?: string;
  age: number;
}

//Extending interface
interface Person1 {
  name: string;
}

interface Employee extends Person1 {
  id: number;
}
const emp: Employee = {
  name: "Praveena",
  id: 1,
}; //Combines properties (like intersection)
