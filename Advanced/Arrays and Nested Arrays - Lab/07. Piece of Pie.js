function pies(pies,firstpie,secondpie){

let indexoffirst = pies.indexOf(firstpie)

let indexofSecond = pies.indexOf(secondpie)
   return pies.slice(indexoffirst, indexofSecond+1)
   
}