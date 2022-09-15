function sumFirstLast(inp){

let first = inp.shift()
let last = inp.pop()

let sum = +first + +last

console.log(sum);




}sumFirstLast(['20', '30', '40'])