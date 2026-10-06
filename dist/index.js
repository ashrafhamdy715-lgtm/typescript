"use strict";
// --------------- Data Type ---------------
// void, number, string, boolean, undefind, null, object, (Array<>, []), any, unknown
let x = 5;
// Object
let y = { name: "Hamdy" };
let z = { name: "Hamdy" };
// Array
let a = ["fd", "eded"];
let b = [6, 4];
let c = [6, 4];
// Function
let d = function () {
    return 2;
};
function myfun() {
    return;
}
// Any
let e = 3;
e = "Omar";
// Unknown
// catch run time error
let f = "hamdy";
f = 5.423;
// f.toFixed(2);  Error!!!!!!!!
if (typeof f == "number") {
    f.toFixed(2);
}
// Tupple
let g = [5, "hamdy"];
// Union
let h = 2;
h = "hamdy";
let i = "A";
let user1 = {
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
let user2 = {
    id: 2,
    firstName: "hamdy",
    lastName: "ashraf",
    age: 20,
};
let user3 = {
    name: "hamdy",
    age: 20,
    salary: 2000,
};
let user4 = {
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
let j = "Hamdy";
let k = j;
let l = j;
// let k: string = j  Error because j is anknown and k is string
//# sourceMappingURL=index.js.map