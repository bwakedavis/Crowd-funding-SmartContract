// const companies = [
//     {name:"Company One", category:"Finance", start: 1981, end: 2003},
//     {name:"Company Two", category:"Retail", start: 1992, end: 2008},
//     {name:"Company Three", category:"Auto", start: 1999, end: 2007},
//     {name:"Company Four", category:"Retail", start: 1989, end: 2010},
//     {name:"Company Five", category:"Technology", start: 2009, end: 2014},
//     {name:"Company Six", category:"Finance", start: 1987, end: 2010},
//     {name:"Company Seven", category:"Auto", start: 1986, end: 1996},
//     {name:"Company Eight", category:"Retail", start: 2011, end: 2016},
//     {name:"Company Nine", category:"Technology", start: 1981, end: 1989},
//     {name:"Company Ten", category:"Finance", start: 2000, end: 2011},
// ]

const users = [
    {
        "age":20,
        "name": "Davis",
        "email":"davis@gmail.com"
    },
    {
        "age":22,
        "name": "Dan",
        "email":"dan@gmail.com"
    },
    {
        "age":40,
        "name": "Don",
        "email":"don@gmail.com"
    },
    {
        "age":70,
        "name": "Andrew",
        "email":"andrew@gmail.com"
    },
    {
        "age":14,
        "name": "Ben",
        "email":"ben@gmail.com"
    },
    {
        "age":56,
        "name": "Charlote",
        "email":"charlote@gmail.com"
    },
    {
        "age":12,
        "name": "Erlin",
        "email":"erlin@gmail.com"
    }
]

const numbers = [45,64,12,56,24,99,76,9,35,71,17,28,83,40]

//forEach

numbers.forEach(number => {
    console.log(number)
});

users.forEach(user => {
    console.log(user.name)
});

// companies.forEach((company)=>{
//     console.log(company)
// })
// //filter

const large = numbers.filter((number)=>{
    if(number > 20){
        return true
    }
})

console.log(large)

const adult = users.filter((user)=>{
    if(user.age > 20){
        console.log(`${user.name} is an adult`)
    }
})

// const large = numbers.filter((number)=>{
//     if(number<= 18){
        
//         return true
//     }
// })

// console.log(large)

// const retailCompanies = companies.filter((company)=>{
//     if(company.category === 'Retail'){
//         console.log(company.name)
//         // return true
//     }
// })

// console.log(retailCompanies)
// //map
let newNumbers = numbers.map((number)=>{
    return number
})

console.log(newNumbers)

let userEmails = users.map((user)=>{
    return user.email
})

console.log(userEmails)
// const companyNames = companies.map((company)=>{
//     console.log(company.name)
// })

// console.log(companyNames)

// const companyCategory = companies.map((company)=>{
//     console.log(company.category)
// })

// console.log(companyCategory)
// //sort
let ascendingN = numbers.sort((number1,number2)=>{
    return number1 - number2
})

console.log(ascendingN)

let descendingN = numbers.sort((number1,number2)=>{
    return number2 - number1
})

console.log(descendingN)

users.sort((user1,user2)=>{
    if(user1.age > user2.age){
        console.log(`${user1.name} is older than ${user2.name}`)
    }else{
        console.log(`${user2.name} is older than ${user1.name}`)
    }
})

// const sortedCompanies = companies.sort((company1,company2)=>{
//     if(company1.start <company2.start){
//         console.log(`${company1.name} started before ${company2.name}`)
//     }else{
//         console.log(`${company2.name} started before ${company1.name}`)
//     }
// })
// console.log(sortedCompanies)
// //Descending
// const sortNumbersDescemding = numbers.sort((num1, num2)=>{
//     return num1 -num2
// })
// console.log(sortNumbersDescemding )

// const sortNumbersAscending = numbers.sort((num1, num2)=>{
//     return num2 -num1
// })

// console.log(sortNumbersAscending)
// //reduce

let sum = numbers.reduce((total,number)=>{
    return total + number
},0)

console.log(sum)

let sumOfAges = users.reduce((total,user)=>{
    return total + user.age
},0)

console.log(sumOfAges)
// const sum = numbers.reduce((total,number)=>{
//     return total + number
// })

// console.log(sum)

// const companiesLifetime = companies.reduce((total,company)=>{
//     return total + (company.end - company.start)
// },0)

// console.log(companiesLifetime)


// //combined

// const combined = numbers.map(number=>{
//     return number * 2
// }).filter(number=>{
//     return number<= 40
// }).sort((num1, num2)=>{
//     return num1 - num2
// }).reduce((total,num)=>{
//     return total + num
// },0)

// console.log(combined)

//some
let hasId = users.some((user)=>{
    return user.id
})

console.log(hasId)

//every

let hasEmail = users.every((user)=>{
    return user.email
})

console.log(hasEmail)
