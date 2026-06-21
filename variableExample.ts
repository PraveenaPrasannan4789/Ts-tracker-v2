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

// Unknown (safer alternative to any)
let value: unknown = "TypeScript";

value = "hello";
value = 12;
if (typeof value === "number") {
  console.log("Unknown (after check):", value);
}

// Null & Undefined
let u: undefined = undefined;
let n: null = null;

console.log("Null & Undefined:", u, n);

// Union Types
let id: number | string;
id = 101;
id = "A101";

console.log("Union Type:", id);

//  Literal Types
let direction: "left" | "right";
direction = "left";
let literalExample: "top" | "bottom";
literalExample = "bottom";

console.log("Literal Type:", direction, literalExample);

// Const vs Let
const PI: number = 3.14;
// PI = 3.141; ❌ Error (cannot reassign)

let counter: number = 1;
counter = 2; // ✅ allowed

console.log("Const vs Let:", PI, counter);

// Type Assertion
let someValue: unknown = "Hello World";
let someValue1: unknown = "Hello world1";

// Method 1
let strLength1: number = (someValue as string).length;
let strLength1new: number = (someValue1 as string).length;

// Method 2
let strLength2: number = (<string>someValue).length;
let strLength2new: number = (<string>someValue1).length;

console.log("Type Assertion:", strLength1, strLength2);

//  Object Type
let user: { name: string; age: number } = {
  name: "Praveena",
  age: 24,
};

console.log("Object:", user);

let user1: { name: string; age: number } = {
  name: "ammu",
  age: 26,
};
console.log("user1", user1);

//type assertion another example

let newTypeAsssertionExample: unknown = "example";

// Method 1
let newTypeAsssertionExampleValue: number = (newTypeAsssertionExample as string)
  .length;
console.log("newTypeAsssertionExample", newTypeAsssertionExampleValue);
