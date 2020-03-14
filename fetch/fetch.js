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
    fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        return res.json()
    }).then((post)=>{
        output = ""

        post.forEach(post => {
            output += `
             <ul>
                <li>${post.id}</li>
                <li>${post.title}</li>
                <li>${post.body}</li>
             </ul>
             `   
        });
             

        document.getElementById('display-lorem-text').innerHTML = output
    }).catch((err)=>{
        console.log(err)
    })
}


// Using POST
document.getElementById("add-post").addEventListener('submit', addPost)

function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Accept':'application/json, text/json, */*',
            'Content-type':'application/json'
    },
    body:JSON.stringify({title:title, body:body})
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })

}