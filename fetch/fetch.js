document.getElementById("fetch-text").addEventListener('click', fetchText)

function fetchText(){
    fetch('file.txt').then((res)=>{
        return res.text()
    }).then((data)=>{
        document.getElementById('display-text').innerHTML = data
    }).catch((err)=>{
        console.log(err)
    })
}


document.getElementById("fetch-user").addEventListener('click', fetchUser)

function fetchUser(){
    fetch('user.json').then((res)=>{
        return res.json()
    }).then((user)=>{
        let output = `
        <ul>
            <li>${user.age}</li>
            <li>${user.name}</li>
            <li>${user.email}</li>
        </ul>
        `

        document.getElementById('user').innerHTML = output
    }).catch((err)=>{
        console.log(err)
    })
}



document.getElementById("fetch-users").addEventListener('click', fetchUsers)

function fetchUsers(){
    fetch('users.json').then((res)=>{
        return res.json()
    }).then((users)=>{
        output = ""

        users.forEach(user => {
            output += `
             <ul>
                <li>${user.age}</li>
                <li>${user.name}</li>
                <li>${user.email}</li>
             </ul>
             `   
        });
             

        document.getElementById('users').innerHTML = output
    }).catch((err)=>{
        console.log(err)
    })
}

document.getElementById("fetch-lorem-text").addEventListener('click', fetchLorem)

function fetchLorem(){
    fetch('').then((res)=>{
        return res.json()
    }).then((users)=>{
        output = ""

        users.forEach(user => {
            output += `
             <ul>
                <li>${user.age}</li>
                <li>${user.name}</li>
                <li>${user.email}</li>
             </ul>
             `   
        });
             

        document.getElementById('display-lorem-text').innerHTML = output
    }).catch((err)=>{
        console.log(err)
    })
}