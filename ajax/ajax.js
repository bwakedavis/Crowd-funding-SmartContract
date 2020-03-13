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

    // xhr.onload = function(){
    //     if(this.status == 200){
    //         console.log(this.responseText)
    //     }
    // }
    //Using onreadystatechange
        // HTTP STATUSES
        //200: "OK"
        //403: "Fobiden"
        //404: "Not Found"
    xhr.onreadystatechange = function(){
        if()
    }
    //sends request
    xhr.send()
}