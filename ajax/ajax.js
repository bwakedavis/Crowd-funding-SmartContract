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