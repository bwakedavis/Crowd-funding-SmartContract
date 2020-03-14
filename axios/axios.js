const getButton = document.getElementById('get-button')
const postButton = document.getElementById('post-button')

const getData = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
        console.log(res)
    })
}

const sendData = ()=>{
    axios.post('https://jsonplaceholder.typicode.com/posts', {title: 'Davis',
    body: 'He is cool',
    userId: 1}).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}

getButton.addEventListener('click',getData)
postButton.addEventListener('click',sendData)