function attachEventsListeners() {

   let daysinp = document.getElementById('days')
   let hoursinp = document.getElementById('hours')
   let minsinp = document.getElementById('minutes')
   let secondsinp = document.getElementById('seconds')

let btnday = document.getElementById('daysBtn')
let btnhours = document.getElementById('hoursBtn')
let btnmins = document.getElementById('minutesBtn')
let btnsecs = document.getElementById('secondsBtn')

btnday.addEventListener('click',onclick)
btnhours.addEventListener('click',onclick)
btnmins.addEventListener('click',onclick)
btnsecs.addEventListener('click',onclick)



function onclick(){

console.log('hi');
if(daysinp.value != ''){
    hoursinp.value = daysinp.value * 24
    minsinp.value = hoursinp.value * 60
    secondsinp.value = minsinp.value * 60
}else if(hoursinp.value != ''){
    daysinp.value = hoursinp.value / 24
    minsinp.value = hoursinp.value * 60
    secondsinp.value = minsinp.value * 60
}else if(minsinp.value != ''){

hoursinp.value = minsinp.value / 60
    daysinp.value = hoursinp.value / 24
    minsinp.value = hoursinp.value * 60
    secondsinp.value = minsinp.value * 60
}else if(secondsinp.value != ''){
    minsinp.value = secondsinp.value / 60
    hoursinp.value = minsinp.value / 60
    daysinp.value = hoursinp.value / 24
    
   
}




}
}