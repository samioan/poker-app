//Poker Game

//Player's Hand
const myHand = ["H14","H12","H10","H13","H11"]; //The player's card hand - has royal flush
const myHand2 = ["H13","H11","H09","H12","H10"]; //The player's card hand - has straight flush

//Defines if a hand has only one color
function oneColor (aHand) {
    const a = aHand[0].charAt(0) + aHand[1].charAt(0) + aHand[2].charAt(0) + aHand[3].charAt(0) + aHand[4].charAt(0);
    if (a === 'HHHHH' || a === 'SSSSS' || a === 'CCCCC' || a === 'DDDDD')  {
        return true;
    } else return false;
}
//Defines a card's number
function numberCalculation (aHand, i) {
    const x = aHand[i].charAt(1) + aHand[i].charAt(2);
    switch(x) {
        case '02':
            return "Two ";
        case '03':
            return "Three ";                   
        case '04':
            return "Four ";                   
        case '05':
            return "Five ";                  
        case '06':
            return "Six ";                   
        case '07':
            return "Seven ";                   
        case '08':
            return "Eight ";                   
        case '09':
            return "Nine "; 
        case '10':
            return "Ten ";    
        case '11':
            return "Jack ";   
        case '12':
            return "Queen ";     
        case '13':
            return"King ";    
        case '14':
            return"Ace ";                                                                                                                
        default: 
            return"Nothing ";
    }               
}
//Defines a card's color
function colorCalculation (aHand, i) {
    const x = aHand[i].charAt(0);
    switch(x) {
        case 'H':
            return "of Hearts";
        case 'S':
            return "of Spades";
        case 'C':
            return "of Clubs";
        case 'D':
            return "of Diamonds";
        default: 
            return "of Undefined";
    }

}
//Defines a card's strength
function cardStrength (aHand, i) {
    return parseInt((aHand[i].charAt(1) + aHand[i].charAt(2)), 10);
}
//Check if we have five cards in sequential order
function pairCheckFive (aHand, i, o) {
    const b = [(cardStrength(aHand, i)), (cardStrength(aHand, i+1)), (cardStrength(aHand, i+2)), (cardStrength(aHand, i+3)), (cardStrength(aHand, i+4))]
    if (b.includes(o) && b.includes(o+1) && b.includes(o+2) && b.includes(o+3) && b.includes(o+4)) {
        return true;
    } else return false;
} 
//Check if we have a royal or a straight flush
function royalStraightFlush (aHand, i, o) {
    const a = oneColor(aHand);
    const b = pairCheckFive(aHand, i, o);

    if (a === true && b === true) {
        return true;
    } else return false; 
}
//Console for testing
console.log("CARD NAME");
console.log(numberCalculation(myHand, 0) + colorCalculation(myHand, 0));
console.log("CARD STRENGTH");
console.log(cardStrength(myHand, 0));
console.log("DOES THE HAND HAVE ONE COLOR?");
console.log(oneColor(myHand));
console.log("DOES THE HAND HAVE 5 CARDS IN SEQUENTIAL ORDER?");
console.log(pairCheckFive(myHand, 0, 10));
console.log("DOES THE HAND HAVE A ROYAL FLUSH?");
console.log(royalStraightFlush(myHand, 0, 10));
console.log("DOES THE HAND HAVE A STRAIGHT FLUSH?");
console.log(royalStraightFlush(myHand2, 0, 9));