class SummerCamp{
constructor(organizer,location){
this.organizer = organizer
this.location = location

this.priceforcamp = {
    child: 150, 
    student: 300, 
    collegian: 500



}

this.list = []

}

registerParticipant (name, condition, money){

if(!this.priceforcamp(condition)){

    throw new Error `Unsuccessful registration at the camp.`
}if(money < this.priceforcamp.condition)
{}    
    
    
    
    
    
    
    else{

return `The ${name} is already registered at the camp.`




}






}









}const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

