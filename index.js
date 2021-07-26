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
        age: 11
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
var introduce = function (person) {
    console.log("Hello I'm " + person.name + ", And I'm " + person.age + " years old.");
};
introduce({
    name: "Fahim",
    age: 16,
    hobby: "Sleeping"
});
