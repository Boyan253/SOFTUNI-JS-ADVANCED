function timetowalk(steps,footpringinmeters,speedkmh){

let distanceinmeters = steps*footpringinmeters
let meterpers = speedkmh / 3.6
//also seconds[v] =
let time = distanceinmeters / meterpers
let res = Math.floor(distanceinmeters / 500)
let minutes =  Math.floor(time / 60)
let sec = time - (minutes * 60 ).toFixed(0)
let timeinh = Math.floor(time / 3600)
minutes += res
timeinh += Math.floor(minutes / 60)
minutes = minutes % 60

let formath = timeinh < 10 ? `0${timeinh}` : `${timeinh}`
let formatm = minutes < 10 ? `0${minutes}` : `${minutes}`
let formats = sec < 10 ? `0${sec}` : `${sec.toFixed(0)}`

console.log(`${formath}:${formatm}:${formats}`);


}timetowalk(4000, 0.60, 5)