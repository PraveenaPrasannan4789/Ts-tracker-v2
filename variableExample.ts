// 1. Basic Types
let salary: number = 25000;
let empName: string = "Praveena";
let isLoggedIn: boolean = true;

console.log("Basic Types:", salary, empName, isLoggedIn);

//type inference examples

let ageGroup = 35000;
let totalAmount = 4000;

console.log("ageGroup, totalAmount", ageGroup, totalAmount);

//arrays
let newArray: number[] = [1, 2, 3, 4, 5];
console.log("number array", newArray);

let stringArray: string[] = ["ammu", "sreelal", "cyrah"];
console.log("stringArray", stringArray);

let stringArray2: Array<string> = ["a", "b", "c"];
console.log("stringArray2", stringArray2);

//tuple
let tupleExample: [string, number, number] = ["a", 8, 9];
console.log("tupleExample", tupleExample);

//enum example
enum Role {
  Admin,
  User,
}

let roles: Role = Role.Admin;
console.log("enum example", roles);

//any type
let randomValue: any = "string";
randomValue = true;

console.log("random value", randomValue);
