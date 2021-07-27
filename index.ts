// dataType = Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown

let myName: string = "Abdul Mozid Fahim";

let age: number;
age = 16;

let isMarried: boolean = false;



//---------------------union type----------------------

type NumberOrString = number | string
// let studentId: number | string = 10876;
let studentId: NumberOrString = 433454;
studentId = "amf-324";

//---------------------Object--------------------

type PersonType = { name: string, age: number, hobby: string }
interface Person {
  name: string;
  age: number;
  hobby?: string
}

let person: Person = {
  name: "Abdul Mozid Fahim",
  age: 16,
  hobby: "Sleeping"
}

let person2: Person = {
  name: "Someone",
  age: 11,
  hobby: "traveling"
}


//---------------------Array--------------------

const number: (string | number)[] = [33, 32, 13, 34, "what ever"]
const persons: Person[] = [
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
   
]

//---------------------function--------------------

const greeting = (name: string): void => {
  console.log(`Hello ${name}`)
}
greeting("Fahim")

const add = (a: number, b: number): number => {
  return a + b
}

const introduce = ({name, age}: Person): void => {
  console.log(`Hello I'm ${name}, And I'm ${age} years old.`)
}

introduce(person)


const getArray = <T>(arr: T[]): T[] => {
     return arr
}

getArray <string>(["abcd", "efgh", "igkl"])
getArray <number>([1,2, 3,5])


//---------------------enum--------------------

enum friendsGfName {
   Rahat = "Lima",
   Mashraful = "Sayma",
   Yakub = "Moni",
   Azim = "Reshma"
}

console.log(`What is the ${friendsGfName.Mashraful} boyfriend Name??`)