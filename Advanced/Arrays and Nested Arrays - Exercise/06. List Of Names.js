function listNames(inp){
let sum= 0
inp.sort((a,b) => a.localeCompare(b))

for (let le of inp){
    sum++
console.log(`${sum}.${le}`);




}
}listNames(["John", "Bob", "Christina", "Ema"])