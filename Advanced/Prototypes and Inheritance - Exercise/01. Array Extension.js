{


myArr.prototype.last = function(){
return this[this.length-1]
}
myArr.prototype.skip = function(n){
let res =[]
for (let index = n; index < this.length; index++) {
    res.push(this[index])
    
}
return res
}
myArr.prototype.take = function(n){
let res = []
for (let index = 0; index < n; index++) {
    res.push[this[index]]
    
}

return res


}
myArr.prototype.sum = function(){
let sum = 0

for(let el of this){
    sum+= Number(el)
}
return sum

}
myArr.prototype.average = function(){

    let sum = 0

    for(let el of this){
        sum+= Number(el)
    }
    sum %= this.length
    
return sum

}}