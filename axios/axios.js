const getButton = document.getElementById('get-button').addEventListener('click',getData)
const postButton = document.getElementById('post-button').addEventListener('click',sendData)

const getData = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
}

const sendData = ()=>{
    axios.post('')
}