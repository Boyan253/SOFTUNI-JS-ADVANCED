function article(inp){
let myarc = Array.from(inp)
let content = document.getElementById('content')
return ()=>{
    if(!myarc.length){
        return
    }
    let curarc = myarc.shift()
content.innerHTML+= `<article>${curarc}</article>`
}



}
