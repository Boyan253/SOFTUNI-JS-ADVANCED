function Calories (inp){    

let obj = {}

for (let index = 0; index < inp.length; index+=2) {
   obj[inp[index]] = Number(inp[index+1])
    
}
console.log(obj);








}Calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])