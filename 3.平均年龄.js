const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 27 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 40 },
];

const averageAge =
  people.reduce((sum, person) => sum + person.age, 0) / people.length;

console.log(averageAge);
