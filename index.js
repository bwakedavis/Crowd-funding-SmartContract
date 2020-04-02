//declare variables with var,let,const

let f_name = "davis"; //string
let l_name = 'bwake'
let id = 2345; //number
let cool = true; //boolean
notCool = false
let xyz;
let age = 20;

//re-assign variables with new values
id = 5432;
xyz = null //nothing
let fiveDs;
// console.log(name,id,alive,xyz);
fiveDs = ["Davis","Dan","Dick","Don","dave"]
// name += ' bwake'
// console.log(name)
// id +=2
// console.log(id)
// id -=2
// console.log(id)
// id /=2
// console.log(id)
// id *=2
// console.log(id)
// id %=2
// console.log(id)

// console.log(fiveDs);
// console.log(fiveDs.length);
// console.log(fiveDs[0] + " aka " + fiveDs[4])

//falsey - false,null,undefined,0,"",'',Nan
//comparison - <, >, ,<=, >=, !=, !==, ==, ===, &&, ||
// if(age == 20){
//     console.log("you're 20")
// }else if(age < 20){
//     console.log("you're below 20")
// }else{
//     console.log("you are above 20")
// }

// if(f_name == "random name" || age == 20){
//     console.log("youre 20,whoever you are")
// }
// if(f_name == "davis" && age == 20){
//     console.log(f_name + " youre 20")
// }

// Ternary operator
// cool == notCool ? console.log('True'):console.log("false")

//Arrays
let characters = ['Davis','Daniel',"lyn","shawn"]

// console.log(characters)
// console.log(characters.length)
// console.log(characters[2])
// console.log(characters[characters.length - 1])
// console.log(characters.push("Dancun"))
// console.log(characters)
// console.log(characters.indexOf("Dancun"))
// console.log(characters.pop())
// console.log(characters)
// console.log(characters.shift("bwake"))
// console.log(characters.unshift("bwake"))
// console.log(characters)
// console.log(characters.sort())
// characters.splice(0,1,"Bwake")
// console.log(characters)
// characters.splice(0,2,"Bwake")
// console.log(characters)
// characters.splice(0.2)
// console.log(characters)

//objects
let person = {name:"Davis", age:20, isCool:true}

let people = [
    {name:"Davis", age:20, isCool:true},
    {name:"bwake", age:20, isCool:true},
    {name:"wafula", age:20, isCool:true}
]

// people.unshift({name:"Davis", age:20, isCool:true})
// console.log(people[2].name)
// console.log(people)

// person.hungry = true
// console.log(person)

//for loops
//initialize,test, increment
// for(let name = "";name<fiveDs.length;name++){
//     console.log( fiveDs[name])
// }

//for in loop
for(let prop in people){
    console.log(people[prop].name)
}

//while loop
let total = 0
// while(total <30){
//     total += Math.floor(Math.random() * 5) + 1;
//     console.log(total)
// }

// do...while loop
// do{
//     total += Math.floor(Math.random() * 5) + 1;
//     console.log(total)
// }while(total<30)

//functions
// function sayHello(name){
//     return "Hello " +name+ " feel motivated."
// }

// console.log(sayHello("Davis"))

//arrow functions

const sayhi = (name) => name + " Keep pushing man!";

console.log(sayhi("Davis"))

let names = fiveDs.forEach((name, index)=>console.log(index,name))

//local variable,global variable- non initialized variables with let,var or const become global by default
// Hoisting - the process of taking two passes through 
// js file exists,first pass hoisting all declarations 
// to the top of the file 