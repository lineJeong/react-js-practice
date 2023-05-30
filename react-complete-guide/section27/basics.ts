let age: number = 24;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ["Cooking", "Programming", "Riding"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

// type inference

let course: string | number = "React";

course = 12341;
