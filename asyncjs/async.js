let posts = [
    {
        title:'Post One',
        body:'Post One'
    },
    {
        title:'Post Two',
        body:'Post Two'
    }
]

function getPosts(){
    setTimeout(()=>{
        let output = ""
        posts.forEach((post,index)=>{
            output += `
            <li> ${post.title} </li>
            <li> ${post.body} </li>
            `
        })
        document.body.innerHTML = output
    },1000)
}