function sortingArr(inp){

  let sortarr =  inp.sort((a, b) => {
    if(a.length !== b.length)
        {return a.length - b.length}
    else{
        return a.localeCompare(b)
    }})
    
console.log(inp.join('\n'));


}
// }sortingArr(['Alpha', 
// 'beta', 
// 'gamma'])



sortingArr(['test', 
'Deny', 
'omen', 
'Default'])