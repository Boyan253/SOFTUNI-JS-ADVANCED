function deleteByEmail() {
    
let input = document.querySelector('input[name="email"]').value

let rows = Array.from(document.querySelectorAll('tbody tr'))
let isfound = false
for(let row of rows){

if(row.children[1].textContent == input){
isfound = true
    let parent = row.parentElement
    parent.removeChild(row)
}



}
if(isfound){
    document.getElementById('result').textContent = 'Deleted'
}else{
    document.getElementById('result').textContent = 'Not found.'
}
}