class footballTeam{


constructor(clubName, country){
this.clubName = clubName
this.country = country
this.invitedPlayers = []






}

newAdditions(footballPlayers){

for(let el of footballPlayers){

    let teams = el.split('/')
let name = teams[0]
let findindex = this.invitedPlayers.findIndex(p => p.name == name)
let age = teams[1]
let playervalue = teams[2]
if(findindex == -1){
    this.invitedPlayers.push({name,age,playervalue})
}else if(this.invitedPlayers[findindex].playervalue < playervalue){
  
this.invitedPlayers[findindex].playervalue = playervalue
}


}
let mapped = this.invitedPlayers.map(n => n.name)
return `You successfully invite ${mapped.join(', ')}.`




}
signContract(selectedPlayer){


    let command = selectedPlayer.split('/')
   
let name = command[0]
let playeroffer = command[1]
let findindex = this.invitedPlayers.findIndex(p => p.name == name)

if(findindex == -1){
    throw new Error(`${name} is not invited to the selection list!`)
}
if(this.invitedPlayers[findindex].playervalue > playeroffer){
    let priceDifference = this.invitedPlayers[findindex].playervalue - playeroffer
    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
}else{
    this.invitedPlayers[findindex].playervalue = 'Bought'
    return `Congratulations! You sign a contract with ${name} for ${playeroffer} million dollars.`
}

}

ageLimit(name, age){

    let findindex = this.invitedPlayers.findIndex(p => p.name == name)
    if(findindex == -1){
        throw new Error(`${name} is not invited to the selection list!`)
    }
let limit =  Number(age) - this.invitedPlayers[findindex].age
if(this.invitedPlayers[findindex].age >= age){
    return `${name} is above age limit!`
} 
if(limit < 5){
    return `${name} will sign a contract for ${limit} years with ${this.clubName} in ${this.country}!`

}if(limit > 5) {
    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
}





}
transferWindowResult(){
    let sorted = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name))
let mappe = sorted.map(r => `Player ${r.name}-${r.playervalue}`)

return [`Players list:
${mappe.join('\n')}`].join(' ')

}


}let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["aisel/23/160", "rado/35/50", "boqn cherniq/25/52"]));
console.log(fTeam.signContract("aisel/240"));
console.log(fTeam.ageLimit("boqn cherniq", 30));
console.log(fTeam.transferWindowResult());
