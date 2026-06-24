function sample(name: string): string {
  return name;
}

console.log("sample", sample("ammu"));

// Optional parameter:
function greet(name?: string) {
  console.log(name);
}

greet();
