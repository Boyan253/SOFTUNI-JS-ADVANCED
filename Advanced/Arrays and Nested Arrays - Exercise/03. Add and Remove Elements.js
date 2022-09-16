function addRemove(arr){

let emptyArr = []
let sum = 0
for(let el of arr){

if(el == 'add'){
sum++
emptyArr.push(sum)
    
}else if (el =='remove'){
    sum++
    emptyArr.pop()
}else{console.log('Empty');}



}if(emptyArr.length == 0){
    console.log('Empty');
}
console.log(emptyArr.join('\n'));






}addRemove(['remove', 
'remove', 
'remove']
)