function playcard(face, suit) {
    let cardfaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suitface = ['H','D', 'S', 'C']
    if (!cardfaces.includes(face)) {
        throw new Error('Error')
    } if (!suitface.includes(suit)) {
        throw new Error('Error')
    }
   

    switch (suit) {
        case 'S':suit = '\u2660'

            break;

        case 'H': suit = '\u2665'
            break;

        case 'D':suit = '\u2666'
            break;

        case 'C':suit = '\u2663'
            break;
    }

return{
    suit : suit,
    face : face,
    toString(){
        return  this.face + this.suit 
    }
}


}

console.log(playcard('2', 'S'));
