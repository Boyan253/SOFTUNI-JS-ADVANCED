class SmartHike{
constructor(username){
this.username = username
this.resources = 100
this.goals = {}
this.listOfHikes = []





} addGoal(peak,altitude){
    if (this.goals[peak] == undefined) {
        this.goals[peak] = +altitude

        return `You have successfully added a new goal - ${peak}`

    

    }else{
        return `${peak} has already been added to your goals`
        
    }
    
}
// hike (peak, time, difficultyLevel){


// if(this.goals[peak] == undefined){
//    throw new Error `${peak} is not in your current goals`;
// }else if (this.resources == 0){
//     throw new Error `You don't have enough resources to start the hike`

// }
// else if(this.resources - (time * 10) <= 0){
  
//     return "You don't have enough resources to complete the hike"

// }else{
//     let usedResourses = time * 10;
//     this.resources = this.resources - usedResourses;
//     this.listOfHikes.push({peak, time, difficultyLevel})
//     `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`

// }



// }
hike(peak, time, difficultyLevel) {
    if (this.resources === 0) {
      return "You don't have enough resources to start the hike";
    }

    if (this.goals[peak] != undefined) {
      let usedResourses = time * 10;
      let difference = this.resources - usedResourses;

      if (difference < 0) {
        return "You don't have enough resources to complete the hike";
      } else {
        this.resources -= usedResourses;
        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
      }
    } else {
      throw new Error(`${peak} is not in your current goals`);
    }
  }
  rest (time){


time = Number(time)
this.resources += time * 10
 if(this.resources >= 100){
    this.resources = 100
    return `Your resources are fully recharged. Time for hiking!`

 }else{
    return `You have rested for ${time} hours and gained ${time*10}% resources`

 }












  }
  showRecord (criteria){


    if(this.listOfHikes.length == 0){
        return `${this.username} has not done any hiking yet`
    }
if(criteria == 'hard' || criteria == 'easy'){
    let allHikes = this.listOfHikes.filter(
        (hike) => hike.difficultyLevel === criteria
      );
      let sortedHikes = allHikes.sort((a, b) => a.time - b.time);
      let bestHike = sortedHikes[0];

      if (bestHike === undefined) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }
      return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;







}else{
    
if(criteria == 'all'){

    let result = ["All hiking records:"];
    this.listOfHikes.forEach((hike) => {
      result.push(
        `${this.username} hiked ${hike.peak} for ${hike.time} hours`
      );
    });

return result.join('\n')

}
}







}






  }


  const user = new SmartHike('Vili');
  user.addGoal('Musala', 2925);
  user.hike('Musala', 8, 'hard');
  console.log(user.showRecord('easy'));
  user.addGoal('Vihren', 2914);
  user.hike('Vihren', 4, 'hard');
  console.log(user.showRecord('hard'));
  user.addGoal('Rui', 1706);
  user.hike('Rui', 3, 'easy');
  console.log(user.showRecord('all'));
  





    
