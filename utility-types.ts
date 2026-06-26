interface User {
  name: string;
  age: number;
}

const user1: Partial<User> = {
  //partial
  name: "ammu",
};

const user2: Pick<User, "name"> = {
  //pick
  name: "abc",
};

const user3: Omit<User, "name"> = {
  //omit
  age: 23,
};

console.log("user1", user1);
console.log("user2", user2);
console.log("user3", user3);
