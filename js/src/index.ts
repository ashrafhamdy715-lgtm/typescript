// --------------- Data Type ---------------
// void, number, string, boolean, undefind, null, object, (Array<>, []), any, unknown

let x: number = 5;

// Object
let y: object = { name: "Hamdy" };
let z: { name: string } = { name: "Hamdy" };

// Array
let a: Array<string> = ["fd", "eded"];
let b: number[] = [6, 4];
let c: number[] = [6, 4];

// Function
let d: () => void = function () {
  return 2;
};

function myfun(): void {
  return;
}

// Any
let e: any = 3;
e = "Omar";

// Unknown
// catch run time error
let f: unknown = "hamdy";
f = 5.423;

// f.toFixed(2);  Error!!!!!!!!

if (typeof f == "number") {
  f.toFixed(2);
}

// Tupple
let g: [number, string] = [5, "hamdy"];

// Union
let h: number | string = 2;
h = "hamdy";

let i: "A" | "B" = "A";

// --------------- type & inteface keywords ---------------
type User = {
  // readeonly => can not override on id
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
  //  '?' => property may be come or not
  email?: string;
  fun?: (x: number, y: string) => string;
};

let user1: User = {
  id: 1,
  firstName: "hamdy",
  lastName: "ashraf",
  age: 20,
  email: "hamdy123@gmail.com",
  fun: function (x, y) {
    return "";
  },
};

if (user1.fun !== undefined) {
  user1.fun(4, "fed");
}

// user1.id = 5; => Error, because id is readonly

let user2: User = {
  id: 2,
  firstName: "hamdy",
  lastName: "ashraf",
  age: 20,
};

type Person = {
  name: string;
  age: number;
};

type Emplyee = {
  salary: number;
};

type test = Person & Emplyee;

let user3: Person & Emplyee = {
  name: "hamdy",
  age: 20,
  salary: 2000,
};

interface IUser {
  // readeonly => can not override on id
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
  //  '?' => property may be come or not
  email?: string;
  fun?: (x: number, y: string) => string;
}

let user4: IUser = {
  id: 6,
  firstName: "hamdy",
  lastName: "ashraf",
  age: 20,
  email: "hamdy123@gmail.com",
  fun: function (x, y) {
    return "";
  },
};

// --------------- Casting ------------------
let j: unknown = "Hamdy";

let k: string = <string>j;
let l: string = j as string;

// let k: string = j  Error because j is anknown and k is string
