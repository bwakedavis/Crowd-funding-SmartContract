# Understanding JavaScript High Order Array Methods

The es6+ array methods are now a way to go when working with arrays and objects in an array.They can save you a lot of pain.

Lets have a look at the most used ones:

So we will be working with a simple array containing numbers and another one containing a few objects.

**index.js**

```javascript

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
```

## .forEach()

**forEach** exucutes the specified function for every item in the array

```javascript

    numbers.forEach(number => {
    console.log(number)
    });

    //Returns all the numbers in the array

    users.forEach(user => {
        console.log(user.name)
    });

    //Returns each users name

```

## .filter()

**filter** creates a new array with all elements that pass the condition provided.

```javascript

    const large = numbers.filter((number)=>{

    if(number > 20){
        return true
    }
    })

    console.log(large)

    //Returns an arrays of number above 20

    const adult = users.filter((user)=>{
    if(user.age > 20){
        console.log(`${user.name} is an adult`)
    }
    })

    //Returns users above the age of 20

```

## .map()

**map** creates a new array populated with results as specified in the function

```javascript
    let newNumbers = numbers.map((number)=>{
    return number
    })

    console.log(newNumbers)

    //Returns a new array of numbers

    let userEmails = users.map((user)=>{
        return user.email
    })

    console.log(userEmails)

    //Returns user's emails

```

## .sort()

**sort** method sorts the elements of an array and returns the sorted array

```javascript
    
```