function negPos(arr){

let newarr = []

for (let num of arr){

if(num < 0){
newarr.unshift(num)
}else{
    newarr.push(num)
}







}for(let res of newarr){
    console.log(res);
}








}negPos([7, -2, 8, 9])