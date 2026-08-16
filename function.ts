function sample(name: string): string {
  return name;
}

console.log("sample", sample("ammu"));

// Optional parameter:
function greet(name?: string) {
  console.log(name);
}

greet();

//optional parameter another example

// Optional parameter:
function greetNew(age?: string) {
  console.log(age);
}

greetNew();
