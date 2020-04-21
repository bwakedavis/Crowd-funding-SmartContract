//Variables declared with var,let and const
// let name = "davis" //Datatype string
// let id = 2345 //DataType number
// let alive = true //DataType boolean


// let xyz = null //nothing
let fiveDs; //undefined
// name = "bwake" //re-assigning
fiveDs = ['Dodge','Duck', 'Dip','Dive','Diss'] //arrays
// //math operations
// id += 7 +3
// id -= 7 -3
// id /= 7 /3
// id *= 7 *3
// id %= 7 %3
// let s_name  = name + " has an id of " + id
// console.log(name, id, alive, xyz, fiveDs, s_name, fiveDs[0])
// let hasDuck = fiveDs.includes('Duck')
// console.log(hasDuck)
// let hasDan = fiveDs.includes('Dan')
// console.log(hasDan)
// let test = fiveDs.some((title,index)=>{
//     console.log(index,title)
//     return false
// })
// fiveDs.forEach((item,index,array)=>{
//     console.log(index,item)
// })
// let mappedDs = fiveDs.map((item,index,array)=>{
//     let len = item.length
//     return len
// })
// console.log(mappedDs)
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

// //FUNCTIONS
// // food prices
// let beer_cost = 6.75
// let burger_cost = 5.00
// let pop_cost = 3.00

// //user's money
// let account_balance = 15.75
// function checkBalance(amount){
//     if(account_balance - amount >= 0){
//         return true
//     }else{
//         console.log("insufficient funds")
//         return false
//     }
// }
// // drink beer
// // account_balance = account_balance - beer_cost
// // console.log(account_balance)
// function drink_beer(){
//     if(checkBalance(beer_cost)){
//         account_balance = account_balance - beer_cost
//         console.log("Enjoy your beer")
//     }
//     console.log("\tBalance ", account_balance.toFixed(2))
// }


// //eat burger
// // account_balance = account_balance - burger_cost
// // console.log(account_balance)
// function eat_bugger(){
//     if(checkBalance(burger_cost)){
//         account_balance = account_balance - beer_cost
//         console.log("Enjoy your beer")
//     }
//     console.log("\tBalance ", account_balance.toFixed(2))
// }

// //drink pop
// // account_balance = account_balance - pop_cost
// // console.log(account_balance)
// function drink_pop(){
//     if(checkBalance(pop_cost)){
//         account_balance = account_balance - beer_cost
//         console.log("Enjoy your beer")
//     }
//     console.log("\tBalance ", account_balance.toFixed(2))
// }

// // drink_beer()
// // eat_bugger()
// // drink_pop()

// let mealList = [drink_beer, eat_bugger, drink_pop]

// function visitCarnival(mList){
//     for(let i =0;i<mList.length;i++){
//         mList[i].call()
//     }
// }

// visitCarnival(mealList)

// //Arrow functions

let numbers = [123,234, 456, 567]
// let sum = numbers.reduce((passrdIn, item)=>{
//     return passrdIn + item
// },0)
// console.log(sum)
// let greater = numbers.every((num)=>{
//     return num>100
// })
// console.log(greater)
// let greaterr = numbers.every((num)=>{
//     return num>400
// })
// console.log(greaterr)
// let c = fiveDs.concat(numbers).sort()
// console.log(c)
// let namess = ['Alex', 'Bree', 'Cole', 'Devon', 'Riley']

// let big = numbers.filter((item)=>item>300)
// console.log(big)
// let oddNumbers = numbers.filter((num)=>{
//     return num & 1;
// })
// console.log(oddNumbers)
// namess.forEach((item,index)=>{
//     console.log(index,item)
// })

// //Hoisting - the process of taking two passes through the js file_exists. First pass hoist all the declarations to the top of the file

// let str1 = new String('Toy Stroy')
// let str2 = String('Wale')
// let str3 = "Cars"

// str1.toUpperCase()
// console.log("bwake".toUpperCase())
// console.log(str3)

// let r = str1.substr(1,3)
// console.log(r)

// let conkat = "".concat(str1, ", ", str2, ", ",str3)
// console.log(conkat)

// let num = parseInt("343.53")
// console.log(num)
// let num2 = parseFloat("343.53")
// console.log(num2)
// let num3 = parseInt("343",2)
// console.log(num3)

////Math.round, Math.ceil, Math.random, Math.floor,Math.max
//Number.parseInt()

//Array.join and String.split
// let sentence = "hello my name is Davis"

// let words = sentence.split(" ").sort()
// console.log(words)

// let chars = sentence.split("name")
// console.log(chars)

// let char = sentence.split("")
// console.log(char)

// let hypheneted = words.join("-")
// console.log(hypheneted)

// //Chaining Array Methods
// let people = [
//     {id:123,name:"Davis",email:"davis@gmail.com"},
//     {id:456,name:"Dan",email:"dan@yahoo.com"},
//     {id:789,name:"Doly",email:"doly@gmail.com"},
//     {id:321,name:"marion",email:"marion@yahoo.com"},
//     {id:654,name:"Winnie",email:"weeny@yahoo.com"}
// ]

// let yahoo = people.filter((person)=>{
//     return person.email.indexOf('@yahoo.com') > -1
// }).map((person)=>{
//     return person.name
// })
// console.log("list of yahoo user:", yahoo)

// //AJAX

// let uri = "http://jsonplaceholder.typicode.com/users/7"

// let xhr = new XMLHttpRequest();
// xhr.open("GET",uri,true)
// xhr.addEventListener("load",(response)=>{
//     //handle the response from the server
//     let data = response.responseText //or reponse XML
//     let json = JSON.parse(data) //json object
//     console.log(data)
// })

// xhr.addEventListener('error',(err)=>{
//     console.log(err)
// })
// xhr.send(null)

// //Fetch API - It returns a promise to test with node requires "node-fetch"
// fetch(uri).then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// //Function Currying - means a function can be passed to a function or returned from a function

// function x(a){
//     console.log("x")
//     a() //will return func y
//     return a
// }

// function y(){
//     console.log("y")
// }

// let b = x(y)
// b()

// function greet(msg){
//     // console.log(msg)
//     return function (name){
//         console.log(msg, name)
//     }
// }
// let english = greet("Hi")
// let espanol = greet("Hola")
// let svenske = greet("Hej")
// let deutsch = greet("Tag")

// english("Davis")
// espanol("Davis")
// svenske("Davis")
// deutsch("Davis")

// //Callback functions - 
// function doThing(other){
//     let x = 7
//     //Do lots of stuff
//     let name = "Davis"
//     other(name)

// }

// function hello(nm){
//     console.log("hello ", nm)
// }

// doThing(hello)

// let u_name = ['Stacy','Harriet', 'Mary', 'Tom','Carlos']
// u_name.forEach(hello)
// setTimeout(hello,2000,"Bwake")

// navigator.geolocation.getCurrentPosition(goPosition,positionError,{})

// function goPosition(position){
//     //position details
// }
// function positionError(error){
//     console.log(error)
// }

// //Nested loops and multi-dimensional objects

// let twoD = [[1, 2, 3, 4, 5, 6, 7],[8, 10, 5, 6],[123, 54, 12, 11, 6 ,78]]

// let bigHero = {
//     characters:[
//         {name:"Hiro", voice:"Ryan Potter"},
//         {name:"Baymax", voice:"Scot Adsit"},
//         {name:"Go Go Tamago", voice:"Jamie Chung"},
//         {name:"Fred", voice:"T.J Mille"}
//     ]
// }

// //nested for loop
// for(let i=0;i<twoD.length;i++){
//     for(let n=0;n<twoD[i].length;n++){
//         console.log(twoD[i][n])
//     }
// }

// let chars = bigHero.characters
// console.log(chars)

// for(let i = 0;i < bigHero.characters.length;i++){
//     console.log(bigHero.characters[i])
//     for(let prop in chars[i]){
//         console.log(prop,chars[i][prop])
//     }
// }

// //setTimeout,Setinterval,clearTimeout,clearInterval

// function log(msg){
//     console.log("hellow ", msg)
// }

// let davis = setTimeout(log, 1000, "Davis")
// clearTimeout(davis)
// let bwake = setTimeout(log, 500, "Bwake")
// clearTimeout(bwake)

// let come = setInterval(log,2000,"I'll come again")
// clearInterval(come)

// //Immediately invoked function Expressions
// function doSomething(){
//     //function declared
//     let sum = 2+23
//     console.log(` Am just trying to be useful lol`)
// }
// doSomething; //does nothing
// doSomething() //runs the function and waits for areturn value

// let somethingElse = (()=>{
//     //function expression
//     console.log("i was returned")
//     return true
// })()

// let doingSomething = ((nm)=>{
//     //function expression
    
//     return {
//         name:nm,
//         id:123,
//         x:function(){
//             console.log("am safe here")
//         }
//     }
// })('Alex')

// console.log(doingSomething.name, doingSomething.id, )
// doingSomething.x()

// //EventListeners
// let btn = document.getElementById('btn')
// let link = document.getElementById('link')
// let txt = document.getElementById('txt')

// document.addEventListener('DOMContentLoaded', init)
// function init(){
//     btn.addEventListener('click', buttonClicked)
//     function buttonClicked(ev){
//         console.log(ev.type, ev.target, ev.currentTarget)
//     }
    
//     link.addEventListener('click', linkClicked)
//     function linkClicked(ev){
//         ev.preventDefault();
        
//         console.log(ev.type, ev.target, ev.currentTarget)
//     }
    
//     link.addEventListener('click', (ev)=>{
//         ev.preventDefault();
//         console.log("link clicked")
//     })
    
//     txt.addEventListener("input", (ev)=>{
//         console.log(ev.target, ev.target.value)
//     })
//     txt.addEventListener("change", (ev)=>{
//         console.log(ev.target, ev.target.value)
//     })
//     txt.addEventListener("blur", (ev)=>{
//         console.log(ev.target, ev.target.value)
//     })
// }

// //Event Bubbling and Propagation
// //element.addEvemtListener(type,func,useCapture)
// let m = document.getElementById('m')
// let d = document.getElementById('d')
// let p = document.getElementById('p')
// let s = document.getElementById('s')
// let l = console.log

// let highlight = (ev)=>{
//     //add bg to gold
//     let target = ev.currentTarget
//     target.className = 'gold'
//     reset(target)
// }
// let reset = (el)=>{
//     setTimeout(()=>{
//         el.className = ""
//     },2000)
// }

// d.addEventListener('click', (ev)=>{
//     ev.stopImmediatePropagation()
//     l("Hi am a div")
// })
// let elements = [m, d, p, s]
// elements.forEach((el)=>{
//     el.addEventListener('click',highlight)
// })

// // Keyboard events - ev.char, ev.charCode, ev.which
// let l = console.log
// document.addEventListener('DOMContentLoaded', init)

// function init(){
//     let txt = document.getElementById('txt')
//     txt.addEventListener('keydown', anyKey)
// }

// function anyKey(ev){
//     // l(ev.type,ev.target)
//     let target = ev.currentTarget
//     let tag = target.tagName
//     let char = ev.which || ev.charCode || ev.char
//     let s = String.fromCharCode(char)
//     l(target, tag, char, s)
// }

// //Namespacing 1

// let davis = {
    
//         colorDiv:(ev)=>{
//             let target = ev.currentTarget
//             target.style.backgroundColor = 'purple'
//             target.style.color = '#fff'
            
//         },
//         init: ()=>{
//             divA = document.getElementById('output')
//                 divA.addEventListener('mousemove',davis.colorDiv)
                
//         }
// }
// davis.init()
// // let colorDiv,

// //  divA 
// // colorDiv = (ev)=>{
// //     let target = ev.currentTarget
// //     target.style.backgroundColor = 'purple'
// //     target.style.color = '#fff'
    
// // }

// // divA = document.getElementById('output')
// // divA.addEventListener('mousemove',colorDiv)

// //Date object
// let d = new Date()
// let num = 1000 * 60 *60 * 24 * 365.25 * 40
//          // ms * sec * min * hr * days * years

// let str = '20 July 2012 14:05:00'
// let dl = new Date(1500000000000)
// //Unix Epoch Jan 1 00:00:00.000 1970
// console.log(dl)

// let d2 = new Date(num)
// console.log(d2)

// let d3 = new Date(str)
// console.log(d3)

// let d4 = new Date(2017, 0, 1, 12, 30 ,0 ,123)
// console.log(d4)

// d.setFullYear(2020) //setHours(9), setMinutes(), setMonth(), setDate()
// console.log(d.setFullYear(2020))

// let t = d.getMinutes()
// console.log(t)
// let ds = d.getDay()
// console.log(ds)
// let dh = d.getHours()
// console.log(dh)
// let dt = d.getDate()
// console.log(dt)

// //OUTPUT
// /*
//     d.t0DateString() - date portion to UTC time
//     d.toTimeString() - date portion UTC time
//     d.toISOString() - date simplified UTC
//     d.toJSON() - date for use in json string - UTC
//     d.toLocaleString() - local time and date
//     d.toLocaleString('en-CA') - local time and date with specified formatting
//     d.toUTCString - UTC date string
// */

// //Truthy and Falsey
// //null, undefined, 0, false, '', "", NaN - Falsey

// let davy; //undefined
// let es = ""
// let z = 0
// let n = null
// let u = undefined
// let f = false

// let i = isNaN("hello")
// if(false){
//  console.log("true part")
// }else{
//     console.log("false part")
// }
// console.log(i)

// if(davy || es || z || n || u || f){
//     console.log("True part")
//    }else{
//        console.log("False part")
//    }

// //Null an Undefined
// //NULL means nothing, void, emptiness, and is intentionally set
// // UNDEFINED means the container exists but has'nt been given a value yet ie.functions with no return statement returns undefined
// function abc(){
//     //nothing here
    
// }
// console.log(abc)
// function abd(){
//     //nothing here
//     return null
// }
// console.log(abd())
// console.log(typeof null) //object
// console.log(typeof undefined) //undefined

// console.log(null === undefined) //false
// console.log(null == undefined) //true

// console.log(null == null) //true
// console.log(null === null) //true

// console.log(undefined == undefined) //true
// console.log(undefined === undefined) //true

// console.log(!null) //true
// console.log(isNaN(1 + null)) //false
// console.log(isNaN(1 + undefined)) //true

// //Throwing Errors and exceptions ad using try...catch to handle thrown errors and exceptions
// // EvalError, InternalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
// // throw "Javelin" //stops the program
// // console.log("hello")
// try{
//     // throw true
//     throw {name:"Davis", message:"cool"}
//     // fetch("http://jsonplaceholder.typecode.com").then((response)=>{})
//     console.log("hello")
// }catch(err){
//     console.log("Caught", err.name, err.message)
// }finally{
//     console.log("took a long time")
// }
// console.log("end")

// //for ..of loop
// let supernatural = {
//     "actors":[
//         "Jared", "Jensen", "Mark", "Collins"
//     ],
//     "characters":[
//         "Sam", "Dean", "Crowley", "Castial"
//     ],
//     "seasons":12
// }

// for(prop in supernatural){
//     console.log(prop, supernatural[prop])
// }

// for(prop in supernatural.actors){
//     console.log(prop, supernatural.actors[prop])
// }

// for(prop in supernatural.actors){
//     console.log(prop)
// }
// for(prop of supernatural.actors){
//     console.log(prop)
// }

// //Object.assign(target, sources...) method - used to Copy or Merge objects

// let obj1 = {"arms":true,"armCount":2}
// let obj2 = {"weapons":["missile launcher", "saw"]}
// let obj3 = {"canMove":true, "legs":8, "treads":8}

// let arms = Object.assign({"hasHands":true},obj1, obj2)
// console.log(arms)

// //Tips for Debbuging JS
// let DEBUG_MODE = false
// if(DEBUG_MODE){
//     debugger
// }
// let D = "Davis"
// let B = "Bwake"
// console.count(D)

// function x(nm){
//     console.count(nm)
//     return true
// }
// console.count(B)
// x(D)

// console.log(D)
// x(B)

// console.count(D)

// console.time(B)
// console.group()
//     console.log("log")
//         console.group()
//         console.info("info")
//         console.groupEnd()
//     // console.error("error")
// console.groupEnd()
// console.timeEnd(B)

// console.count

// //NaN and isNaN
// //NaN is a property of the global object - it respresente a value which is not a number
// //It will be unequl to !== to anything inside if()
// //isNaN() first converts the value to a number, next the coerced value is tested for NaN

// let t = isNaN(true) //false
// let f = isNaN(false) //false
// let n = isNaN(null) //false
// let u = isNaN(undefined) //true
// let b = isNaN(23) //false
// let c = isNaN('23') //false
// let d = isNaN('45.45') //false
// let e = isNaN(new Date())  //false
// let g = isNaN('') //false
// let h = isNaN("  ")  //false
// let i = isNaN("28 August 2018") //true
// console.log(t, f, n, u, b, c, d, e, g, i)

// let a = Number(true) //1
// console.log(a)

// // Difference between == and ===, == copmares values, === compares objects
// let a, b, objc1, objc2, copy1, copy2, html1
// a = 5
// b = 5
// if(a == b){
//     console.log("a and b are equal")
// }else{
//     console.log("a and b are not equal")
// }
// if(a === b){
//     console.log("a and b are equal")
// }else{
//     console.log("a and b are not equal")
// }

// objc1 = {prop:"value"}
// objc2 = {prop:"value"}
// if(objc1  == objc2){
//     console.log("objc1 and objc2 are equal")
// }else{
//     console.log("objc1 and objc2 are not equal")
// }
// if(objc1  === objc2){
//     console.log("objc1 and objc2 are equal")
// }else{
//     console.log("objc1 and objc2 are not equal")
// }

// copy1 = objc1
// copy2 = objc1
// if(copy1  == copy2){
//     console.log("copy1 and copy2 are equal")
// }else{
//     console.log("copy1 and copy2 are not equal")
// }
// if(copy1  === copy2){
//     console.log("copy1 and copy2 are strictly equal")
// }else{
//     console.log("copy1 and copy2 are strictly not equal")
// }

// html1 = document.querySelector('h1')
// html2 = document.querySelector('h1')
// if(html1  == html2){
//     console.log("html1 and html2 are equal")
// }else{
//     console.log("html1 and html2 are not equal")
// }
// if(html1  === html2){
//     console.log("html1 and html2 are strictly equal")
// }else{
//     console.log("html1 and html2 are not strictly equal")
// }

// //'new' keyword - creates new object, the object is prototyped linked, the object is set as "this" binding, if no return statement exists then a copy of the object is returned

// function Car(make, model){
//     // console.log(this)
//     this.props = {
//         make,
//         model
//     }
//     this.info = function(){
//         return this.props
//     }
// }
// let c1 = new Car('Honda', "Accord")
// let c2 = new Car('Tesla', "Model S")
// console.log(c1, c1.props, c2.info())

// //Object.create(prototype,propertiesObject/Object.defineProperties) method
// let objct = {
//     name:"thee ninjaaah"
// }

// let objct2 = Object.create(objct, {})
// console.log(objct2)
// console.log(objct2.name)

// let objct3 = Object.create(objct2, {
//     fullName:{
//         configurable:true,
//         writable:true,
//         enumerable:true,
//         value:true
//     },
//     canBowl:{
//         configurable:true,
//         writable:true,
//         enumerable:true,
//         value:true
//     }
// })

// console.log(objct3, objct3.name)

// //""this"" keyword, without strict mode this will default to the window object
// "use strict"
// let box = document.querySelector('.box')
// let myFunc = function(){
//     console.log("log1", this)
//     setTimeout(()=>{
//         console.log('log3',"timed out", this)
//     },250)
// }
// let myFunc2 = ()=>{ // points to the global object
//     console.log("log2", this)
//     setTimeout(()=>{
//         console.log('log3',"timed out", this)
//     },250)
// }
// box.addEventListener('mousedown', myFunc)
// box.addEventListener('mouseup', myFunc2)

// // myFunc()
// // myFunc.call()
// // myFunc.call(window)
// // myFunc.call(box)
// myFunc.apply()
// myFunc.apply(window)
// myFunc.apply(box)

// // myFunc2()
// // myFunc2.call()
// // myFunc2.call(window)
// // myFunc2.call(box)
// myFunc2.apply()
// myFunc2.apply(window)
// myFunc2.apply(box)

// //Difference between call(), apply() and bind()

// let bob = function(num,str){
//     console.log('bob', num, str, this)
//     return true
// }

// let bill = {
//     name:"Bill Murray",
//     movie: "Lost in Translation",
//     myMethod:function(fn){
//         // fn(2,"hello")
//         let n = arguments[1]
//         let s = arguments[2]
//         fn.apply(bill, [n, s])
//     }
// }

// // bob(1, "hello")
// // bill.myMethod(bob)
// bob.call(bill, 2, "goodbye") //.call
// let arr = [3, 'hi']
// bob.apply(bill,[3, "hi"]) //.apply
// bill.myMethod(bob, 4, "ciao")  
// let fred = bob.bind(bill, 5, "hasta")
// fred()

// //Delete keyworld - removes propeties from objects
// let obj4 = {
//     prop1:42,
//     prop2:"Meaning of Life",
//     prop3:function(){

//     }
// }

// console.log(obj4.prop1, obj4.prop2, obj4.prop3, obj4.prop4)
// obj4.prop1 = null
// obj4.prop2 = undefined
// delete obj4.prop3
// console.log(obj4.prop1, obj4.prop2, obj4.prop3, obj4.prop4)
// for(let p in obj4){
//     console.log(p)
// }

// //void operator
// void ( console.log("sample void") )
// function x() {
//     let a = 1
// }
// let abc = x()

//Custom Object Methods, Getters and Setters
// let obj5 = {
//     prop1: 1970,
//     prop2: "Alien",
//     prop3:function(){

//     }
// }

// obj5.prop1 = 1980
let x = 7
let obj5 = {
    _prop1: 1970,
    get prop1(){
        return this._prop1 * 2
    },
    set prop1(val){
        this._prop1 = val
    },
    prop2: "Alien",
    x,
    prop3(){
        console.log("prop3 called")
    }
}

obj5.prop3()
console.log(obj5.x)
console.log(obj5.prop1)
obj5.prop1 = 1980
console.log(obj5.prop1)
