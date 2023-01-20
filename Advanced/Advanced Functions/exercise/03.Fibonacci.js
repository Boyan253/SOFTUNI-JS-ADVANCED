function getFibonator() {
    let firstnum = 0
    let secondnum = 1 

return function(){
    let sum = firstnum + secondnum
    firstnum = secondnum
    secondnum = sum
    return firstnum
}



}let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
