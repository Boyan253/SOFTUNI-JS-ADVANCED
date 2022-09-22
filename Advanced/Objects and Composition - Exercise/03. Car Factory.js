function Caring(inp){
let obj = {}

obj.model = inp.model

if(inp.power <= 90){
obj.engine = {
    power:90,
    volume: 1800
}


}else if(inp.power <= 120){
obj.engine = {
    power:120,
    volume:2400 
}
}else {
    obj.engine = {
        power:200,
        volume:3500
    }
}


if(inp.carriage == 'hatchback'){
    obj.carriage ={
   type: 'hatchback',
   color: inp.color
    }
}else{
    obj.carriage ={
        type: 'coupe',
        color: inp.color
    }
}

let size;

if(inp.wheelsize % 2 == 0){
   size =  inp.wheelsize -1
    
    
}else{
size = inp.wheelsize 
}obj.wheels = 
[size,size,size,size]

return obj
}Caring({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })

console.log('_______________');
Caring({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })