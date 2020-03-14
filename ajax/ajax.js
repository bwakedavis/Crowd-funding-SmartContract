// Asynchronous JavaScript and XML
// Used in sending and receiving data asynchronously
// Used with XML and JSON

//Fetch a local text file
document.getElementById('button').addEventListener('click', loadFile);

function loadFile(){
    //Create the XHR Object
    let xhr = new XMLHttpRequest();
    // Open the file
    xhr.open('GET', './file.txt', true);
    // console.log(xhr.readyState)

    // loaders (optional)
    xhr.onprogress=function(){
        console.log(this.readyState)
    }

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText)
            document.getElementById('text-file').innerHTML = this.responseText
        }else{
            document.getElementById('text-file').innerHTML = "Not FOUnd"
        }
    }

    xhr.onerror = function(){
        console.log("an error occured")
    }
    //Using onreadystatechange
        // HTTP STATUSES
        //200: "OK"
        //403: "Fobiden"
        //404: "Not Found"
        //READY STATE VALUES
        //0:"Request not initialized"
        //1: "server connection established"
        //2: "request received"
        //3: "processing request"
        //4: "Request finished and response is ready"

    // xhr.onreadystatechange = function(){
    //     console.log(xhr.readyState)
    //     if(this.readyState == 4 && this.status == 200){
    //         console.log(this.responseText)
    //     }
    // }

    //sends request
    xhr.send()
}

//WORKING WITH JSON

document.getElementById('fetch-user').addEventListener('click',fetchUser)

function fetchUser(){
    let xhr = new XMLHttpRequest()

    xhr.open('GET','user.json', true)

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText)
            let user = JSON.parse(this.responseText)

            let output = ''
            output += `
            <ul>
            <li>${user.age}</li>
            <li>${user.name}</li>
            <li>${user.email}</li>
            </ul>
            `
            document.getElementById('user').innerHTML = output
        }
    }

    xhr.onerror = function(){
        console.log("An error occured")
    }

    xhr.send()
}


document.getElementById('fetch-users').addEventListener('click',fetchUsers)

function fetchUsers(){
    let xhr = new XMLHttpRequest()

    xhr.open('GET','users.json', true)

    xhr.onload = function(){
        if(this.status == 200){
            // console.log(this.responseText)
            let users = JSON.parse(this.responseText)

            let output = ''
            for(let user in users){
                output += `<ul>
                <li>${users[user].age}</li>
                <li>${users[user].name}</li>
                <li>${users[user].email}</li>
                </ul>`
            
            }

            document.getElementById('users').innerHTML = output
        }
    }

    xhr.onerror = function(){
        console.log("An error occured")
    }

    xhr.send()

    }

    //WORKING WITH ONLINE API
    document.getElementById('fetch-github-users').addEventListener('click', fetchGithubUsers)

    function fetchGithubUsers(){
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users', true)

        xhr.onload = function(){
            if(this.status == 200){
                let users = JSON.parse(this.responseText)
                let output = ""
                for(let user in users){
                    output += `
                    <div class="user">
                    <img src= ${users[user].avatar_url} width="100" height="100"/>
                    <ul>
                        <li>ID: ${users[user].id} </li>
                        <li>User Name: ${users[user].login} </li>
                        <li>Url: ${users[user].url} </li>
                        <li>Followers Url: ${users[user].followers_url} </li>
                    </ul>
                    </div>
                    `
                }
                document.getElementById('display-github-user').innerHTML = output;
            }
        }
        xhr.send()
    }