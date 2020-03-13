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