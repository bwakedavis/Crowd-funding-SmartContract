let bwake = {
    
    colorDiv:(ev)=>{
        let target = ev.currentTarget
        target.style.backgroundColor = 'olive'
        target.style.color = '#333'
        
    },
    init: ()=>{
        divA = document.getElementById('output')
            divA.addEventListener('mouseout',bwake.colorDiv)
            
    }
}
bwake.init()

// let colorDiv, divB 
// colorDiv = function(ev){
//     let target = ev.currentTarget
//     target.style.backgroundColor = 'olive'
//     target.style.color = '#333'
    
// }

// divA = document.getElementById('output')
// divA.addEventListener('mouseover',colorDiv)