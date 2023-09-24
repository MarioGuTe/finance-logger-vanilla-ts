// *** Types ***
// let character = "Mario";
// let age = 30;
// let isBlackBelt = false;

// character = "Rodrigo";

// const circunference = (diameter: number) => {
//   return diameter * Math.PI;
// };

// console.log(circunference(7.5));

//***** Arrays and objects *****
// Arrays
// Ex1
// let names = ["Mario", "Sebastián", "Rodrigo"];

// This doesn't work because the original array only contains string data-type
// names.push(15);

// names.push("Daniel");
// console.log(names);

// Ex2
// let MixedTypes = ["Mario", 34, "Rodrigo", 30];

// Both of these work because originally the array contains "string" an "number" as data-types
// MixedTypes.push("Sebastián");
// MixedTypes.push(15);

// console.log(MixedTypes);

// Objects

// let person = {
//   name: "Mario",
//   hobby: "music",
//   age: 34,
// };

// Works
// person.name = "Rodrigo";

// Doesn't work
// person.hobby = true;
// person.age = "thirty";
// person.skills = "Kung Fu";

// console.log(person.name, person.hobby, person.age);

// *** Explicit Types ***
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

//Works
// age = 20;
// Doesn't work
// isLoggedIn = "Mario";

// Arrays Explicit Types
// Initialize de data-type of names as an array of strings
// with the value of an empty array
// let names: string[] = [];

// names.push("Mario", "Sebastián");

// console.log(names);

// Union Types
// It's used for mixed data-type arrays up to 3 different data-types
// let mixedExplicitTypes: (string | number | boolean)[] = [];

// mixedExplicitTypes.push("Mario", 34, true);

// console.log(mixedExplicitTypes);

// Objects Explicit Types
// let person: object;
// person = { name: "Mario", age: 34 };

// let otherPerson: {
//   name: string;
//   age: number;
//   hobby: string;
// };

// otherPerson = {
//   name: "Rodrigo",
//   age: 30,
//   hobby: "Gaming",
// };

// console.log(otherPerson);

// ***Function Basics***

// let greet: Function;

// greet = () => {
//   console.log("Hello");
// };

// greet();

// let sum = (a: number, b: number): number => {
//   return a + b;
// };

// console.log(sum(2, 2));

// *** void is the absence of value it happens when a function doesn't have a return value
// let optionalSum = (
//   a: number,
//   b: number,
//   c: number | string = "This is the default optional value"
// ): void => {
//   console.log(a + b);
//   console.log(c);
// };

// optionalSum(3, 3);

// *** Type Aliases ***
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
