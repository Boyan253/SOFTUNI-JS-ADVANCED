function extractIncrease(arr){
let res = []
let biggestone = arr[0]
res = arr.reduce((acc,currentEl) => {
    if(biggestone <= currentEl){
        acc.push(currentEl)
        biggestone = currentEl
    }
    return acc
}, [])

return res




}extractIncrease([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])