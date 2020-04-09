//Variables declared with var,let and const
// let name = "davis" //Datatype string
// let id = 2345 //DataType number
// let alive = true //DataType boolean
// let xyz = null //nothing
// let fiveDs; //undefined
// name = "bwake" //re-assigning
// fiveDs = ['Dodge','Duck', 'Dip','Dive','Diss'] //arrays
// //math operations
// id += 7 +3
// id -= 7 -3
// id /= 7 /3
// id *= 7 *3
// id %= 7 %3
// let s_name  = name + " has an id of " + id
// console.log(name, id, alive, xyz, fiveDs, s_name, fiveDs[0])

// let f_name = "Davis"
// let l_name = "Bwake"
// let age = 45
// let first = true
// let last = false

// //Falsey - false, null, undefined, 0, "", '',NaN
// // Binary Logical operators
// //&&-AND , ||-OR, ==-Equalto, ,===, != not equal to, >=, <=, !,
// //Ternary Operators

// if(first == last){
//     console.log("wont happen")
// }else{
//     console.log("you are first if not last")
// }

// first == last? console.log("nope"):console.log("yep")
// if(age <= 40){
//     console.log("you $0 years old or less")
// }else if((age > 40) && (age <=50)){
//     console.log("youre between 41 nad 50 years old")
// }else if(age < 0){
//     console.log("invalid age")
// }

// let ingredients = ['lettuce', 'cheddar', 'ham']

// let sandwithes = (ingredient)=>{
//     for(let i of ingredients){
//         if(i == ingredient){
//             return true
//         }
//         return false
//     }
// }

// if(sandwithes("lettuce")  || sandwithes("chicken") ||sandwithes("beef")){
//     console.log("Sandwitch has beef")
// }else{
//     console.log("No meat") 
// }

// if(sandwithes('lettuce') && sandwithes("onion")){
//     console.log("Sandwith has lettuce and onion")
// }else{
//     console.log("Sandwith has NO lettuce and onion") 
// }


// if(sandwithes('chedar') && sandwithes("lettuce") || sandwithes("onion")){
//     console.log("Sandwith has lettuce and onion")
// }else{
//     console.log("Sandwith has NO lettuce and onion") 
// }

// //Arrays - A numbered list of items

// let characters = ['Luke','Leia','Han', 'Chewie']

// console.log(characters)
// // console.log(characters.length) //counts the elements
// // console.log(characters[2]) //returns the third element
// // console.log(characters[characters.length -1]) //returns the last element

// // characters.push("Anakin") //Adds an element on top of the stack
// // characters.push("Obiwan")
// // console.log(characters)

// // characters.pop() //reomves the top element
// // console.log(characters)

// // characters.unshift('Pepe') //adds an element on the bottom
// // characters.unshift('Bruno')
// // console.log(characters)

// // characters.shift() //removes the element from the bottom
// // console.log(characters)


// characters.splice(0, 1, "Ray") //replacing items
// console.log(characters)

// characters.splice(1, 2, "Stacy")
// console.log(characters)

// characters.splice(1, 1, "Mahrion", "Marion")
// console.log(characters)

// characters.push("Bwake","Wafula", "Patience")
// console.log(characters)

// characters.reverse() //reverse position of the item
// console.log(characters)

// characters.sort() //sorts the item
// console.log(characters)

// let position = characters.indexOf('Wafula') //returns position or negative
// console.log(position)
// position = characters.indexOf('Davis')
// console.log(position)

//Objects

// let dog = {name:"Woody",type:"dog"}
// let cat = {name:"Bob", type:"cat"}
// console.log(dog, cat)

// let petNames = ["Woody", "Bob"]
// console.log(petNames)

// let pets = [{name:"Woody",type:"dog"}, cat]
// console.log(pets)

// pets.push({"name":"Roxy",type:"dog"})
// console.log(pets)

// cat.age = 2
// dog["age"] = 14
// pets[2].age = 6
// console.log(dog.age)
// console.log(pets)

// //JS for loops 
// let names = ['Jeff','Donnie', 'Walter', 'Bunny','Karl', 'Brandt',
// 'Maude', 'Jackie']
// // Initialize, test,increment
// for(let i = 0;i<names.length;i++){
//     console.log(names[i])
// }
// //Reverse
// for(let i =names.length;i>=0;i--){
//     console.log(names[i])
// }

// //FOR IN loop
// let monsters = {'Canada':'Sasquatch','Nepal':'Veti','Scotland':'Loch Mess Monster'}
// let pet = ['wooddy','bob','rozy']
// console.log(monsters)

// for(let monster in monsters){
//     console.log(`${monster} - ${monsters[monster]}`)
// }
// for (let mypet in pet){
//     console.log(`${mypet} - ${pet[mypet]}`)
// }

// //Do while loop
// let total = 0

// do{
//     total += Math.floor(Math.random() * 5) 
//         + 1
//         console.log(total)
// }while(total<30)

// //While loop
// while(total<30){
//     total += Math.floor(Math.random() * 5) 
//     + 1
//     console.log(total)
// }

//FUNCTIONS
// food prices
let beer_cost = 6.75
let burger_cost = 5.00
let pop_cost = 3.00

//user's money
let account_balance = 15.75
function checkBalance(amount){
    if(account_balance - amount >= 0){
        return true
    }else{
        console.log("insufficient funds")
        return false
    }
}
// drink beer
// account_balance = account_balance - beer_cost
// console.log(account_balance)
function drink_beer(){
    if(checkBalance(beer_cost)){
        account_balance = account_balance - beer_cost
        console.log("Enjoy your beer")
    }
    console.log("\tBalance ", account_balance.toFixed(2))
}


//eat burger
// account_balance = account_balance - burger_cost
// console.log(account_balance)
function eat_bugger(){
    if(checkBalance(burger_cost)){
        account_balance = account_balance - beer_cost
        console.log("Enjoy your beer")
    }
    console.log("\tBalance ", account_balance.toFixed(2))
}

//drink pop
// account_balance = account_balance - pop_cost
// console.log(account_balance)
function drink_pop(){
    if(checkBalance(pop_cost)){
        account_balance = account_balance - beer_cost
        console.log("Enjoy your beer")
    }
    console.log("\tBalance ", account_balance.toFixed(2))
}

// drink_beer()
// eat_bugger()
// drink_pop()

let mealList = [drink_beer, eat_bugger, drink_pop]

function visitCarnival(mList){
    for(let i =0;i<mList.length;i++){
        mList[i].call()
    }
}

visitCarnival(mealList)