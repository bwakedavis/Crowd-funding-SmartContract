//variables store value
var name = "Davis" //String
var id = 25467 //Number
var isCool = true //Boolean
var stranger //undefined value
var age = 20
//Re-assign variables
name = "bwake"
id = 74621
isCool = false
stranger = null //nothing

// concatenation
var complement = name + "is cool"

console.log(name,id,isCool,stranger, complement)

//math oprations
id += 2
console.log(id)
id -= 2
console.log(id)
id *= 2
console.log(id)
id /=2
console.log(id)
id  %=2
console.log(id)

//arrays
var myList = ['Dodge', 'Duck','Dive','Done', ] //a numbered list of items
myList.push('Davis') //Add array to top of the stack
myList.pop() //Remove the item on top of the stack
myList.unshift('Dan') //Add item to the bottom of the stack
myList.shift() //Remove item from the bottom of the list
myList.splice(0, 1, "Donstesh") //Replace items in the array
myList.reverse()
myList.sort()

console.log(myList, myList[0], myList[3],myList.length-1,myList.indexOf('Duck'), myList.lastIndexOf('Duck')) 
//indexOf Return index of the item else returns -1

//functions
function hello(name){
    console.log('Hello ' + name)
}
hello('Davis') 

//object
const myObject= {
    name:'Davis',
    age:20,
    isCool:true
}
myObject.id = 34875;
myObject["lastName"] = 'bwake'
console.log(myObject)
//if statements
if(age ==20){
    console.log('You are twenty years old')
}else if(age<20){
    console.log('youre 19 years old or younger')
}else{
    console.log('youre above 20 years old')
}

//Falsey(values that evaluate to false) => false, null,undefined, 0, "",'', NaN

//Comparison operators => <, <=, >, >=, ==, !=, !==

//Binary logical operators => &&, ||

if(age<30 && age>10){
    console.log('youre between 11 and 30 age bracket')
}
if(age==20 || name=='bwake'){
    console.log(name + ' youre ' + age +' years old')
}

//Ternary operator
name =='bwake'? console.log(name): console.log('I dont know you ')

