function sameNumbers(inp){
    let bool = false
    let sum = 0
inp = inp.toString()

let firstnum = inp[0]
for(let i = 0; i < inp.length; i++){
    sum += +inp[i]
}
for(let i = 0; i < inp.length; i++){
   
    if(firstnum === inp[i]){
bool = true


    }else{
bool = false
break
    }
   
}
if(bool == true){
console.log(bool);
console.log(sum);

}else{
    console.log(bool);
    console.log(sum);
}







}sameNumbers(1234)