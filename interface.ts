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
