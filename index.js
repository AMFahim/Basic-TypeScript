"use strict";
// dataType = Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown
var myName = "Abdul Mozid Fahim";
var age;
age = 16;
var isMarried = false;
// let studentId: number | string = 10876;
var studentId = 433454;
studentId = "amf-324";
var person = {
    name: "Abdul Mozid Fahim",
    age: 16,
    hobby: "Sleeping"
};
var person2 = {
    name: "Someone",
    age: 11,
    hobby: "traveling"
};
//---------------------Array--------------------
var number = [33, 32, 13, 34, "what ever"];
var persons = [
    {
        name: "Someone",
        age: 11,
        hobby: "traveling"
    },
    {
        name: "Someone",
        age: 11,
        hobby: "traveling"
    },
    {
        name: "Someone",
        age: 11,
    },
];
//---------------------function--------------------
var greeting = function (name) {
    console.log("Hello " + name);
};
greeting("Fahim");
var add = function (a, b) {
    return a + b;
};
var introduce = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello I'm " + name + ", And I'm " + age + " years old.");
};
introduce(person);
var getArray = function (arr) {
    return arr;
};
getArray(["abcd", "efgh", "igkl"]);
getArray([1, 2, 3, 5]);
//---------------------enum--------------------
var friendsGfName;
(function (friendsGfName) {
    friendsGfName["Rahat"] = "Lima";
    friendsGfName["Mashraful"] = "Sayma";
    friendsGfName["Yakub"] = "Moni";
    friendsGfName["Azim"] = "Reshma";
})(friendsGfName || (friendsGfName = {}));
console.log("What is the " + friendsGfName.Mashraful + " boyfriend Name??");
