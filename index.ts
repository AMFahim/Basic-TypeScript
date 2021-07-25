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

type PersonType = {name: string, age: number, hobby: string}       
interface Person {
  name : string;
  age  : number;
  hobby?: string
}     

let person: Person ={
  name : "Abdul Mozid Fahim",
  age  : 16,
  hobby: "Sleeping"
}   

let person2: Person ={
  name : "Someone",
  age  : 11,
  hobby: "traveling"
}
