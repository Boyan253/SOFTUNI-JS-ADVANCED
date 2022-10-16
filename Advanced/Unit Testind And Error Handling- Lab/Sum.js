function sum(arr,start,end){
    if(!Array.isArray(arr)){
        return NaN
    }
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(end > arr.length){
        end = arr.length - 1
        
    }
    if(start < 0){
        start = 0
    }

}
let sum = 0
let spliced = arr.splice(start,end)
for (let index = 0; index < spliced.length; index++) {
    sum += spliced[index]
    
}
console.log(sum);
    
}sum([10, 20, 30, 40, 50, 60], 3, 300)