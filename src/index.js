//Poker Game

// #region Now that we have tests you don't have to test your code here anymore (because it's a library and shouldn't run :D)
//Player's Hand
const myHand1 = ["H14","H12","H10","H13","H11"]; //has royal flush
const myHand2 = ["H13","H11","H09","H12","H10"]; //has straight flush
const myHand3 = ["S09","D09","H09","C09","H10"]; //has four of a kind
const myHand4 = ["S09","D09","H09","S08","H08"]; //has full house
const myHand5 = ["S14","S11","S02","S08","S05"]; //has flush
const myHand6 = ["S14","H12","D10","C13","S11"]; //has straight
const myHand7 = ["S09","D09","H09","S08","H07"]; //has three of a kind
const myHand8 = ["S09","D09","H08","S08","C13"]; //has two pairs
const myHand9 = ["S09","D09","H07","S08","C13"]; //has a pair
const myHand10 = ["S14","D02","H05","C12","C03"]; //has a pair
// #endregion Now that we have tests you don't have to test your code here anymore (because it's a library and shouldn't run :D)

// TODO: Function that gives names on cards is not needed in the basic scope of the handCheck function, we may move it
//------Define card stats------
//Defines a card's number
function numberCalculation (hand, index) {
    const x = hand[index].charAt(1) + hand[index].charAt(2);
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

// TODO: Function that gives names on cards is not needed in the basic scope of the handCheck function, we may move it
//Defines a card's color
function colorCalculation (hand, index) {
    const x = hand[index].charAt(0);
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

// TODO: You can create a function getCardName that will use the numberCalculation, numberCalculation and return the name (all these in seperate files)

//Defines a card's strength
function cardStrength (hand, index) {
    return parseInt((hand[index].charAt(1) + hand[index].charAt(2)), 10);
}

//------Color related checks for a hand------
//Defines if a hand has only one color
function oneColor (hand) {
    const a = hand[0].charAt(0) + hand[1].charAt(0) + hand[2].charAt(0) + hand[3].charAt(0) + hand[4].charAt(0);
    if (a === 'HHHHH' || a === 'SSSSS' || a === 'CCCCC' || a === 'DDDDD')  {
        return true;
    } else return false;
}

//Check if a hand has every color
function everyColor (hand) {
    const a = [hand[0].charAt(0), hand[1].charAt(0), hand[2].charAt(0), hand[3].charAt(0), hand[4].charAt(0)]
    if (a.includes("H") && a.includes("S") && a.includes("C") && a.includes("D")) {
        return true;
    } else return false;
}

//------Number related checks for a hand------
//Check if we have five cards in sequential order
function pairCheckFive (hand, index, value) {
    const b = [(cardStrength(hand, index)), (cardStrength(hand, index+1)), (cardStrength(hand, index+2)), (cardStrength(hand, index+3)), (cardStrength(hand, index+4))]
    if (b.includes(value) && b.includes(value+1) && b.includes(value+2) && b.includes(value+3) && b.includes(value+4)) {
        return true;
    } else return false;
} 

//Check for an ace related unique pair
function pairCheckFiveAce (hand, index) {
    const b = [(cardStrength(hand, index)), (cardStrength(hand, index+1)), (cardStrength(hand, index+2)), (cardStrength(hand, index+3)), (cardStrength(hand, index+4))]
    if (b.includes(14) && b.includes(2) && b.includes(3) && b.includes(4) && b.includes(5)) {
        return true;
    } else return false;
}

//Check if a hand has cards of the same number
function cardSame (hand, index, value, numberOfOccurences) {
    const array = [(cardStrength(hand, index)), (cardStrength(hand, index+1)), (cardStrength(hand, index+2)), (cardStrength(hand, index+3)), (cardStrength(hand, index+4))]
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    if (countOccurrences(array, value) === numberOfOccurences) {
        return true;
    } else return false;
}

//------Winning hand checks------
//Check if we have a royal flush
function royalFlush (hand, index, value) {
    const a = oneColor(hand);
    const b = pairCheckFive(hand, index, value+10);

    if (a === true && b === true) {
        return true;
    } else return false; 
}

//Check if we have a straight flush
function straightFlush (hand, index, value) {
    const a = oneColor(hand);
    let x;
    for (x = 9; x > 1; x--) {
        if (((pairCheckFive(hand, index, value+x) === true) || (pairCheckFiveAce(hand, index) === true)) && (a === true)) {
            return true;
        } else return false;
    }
}

//Check if we have four of a kind
function fourOfAKind(hand, index, value, numberOfOccurences) {

    let y;
    for (y = 0; y < 15; y++) {
        if (cardSame(hand, index, value+y, numberOfOccurences = 4) === true) {
            break;
        }
    }

    if (y != 15) {
        return true;
    } else return false;
}

//Check if we have a full house
function fullHouse(hand, index, value, numberOfOccurences) {
    let x;
    let y;
    for (y = 0; y < 15; y++) {
        if (cardSame(hand, index, value+y, numberOfOccurences = 3) === true) {
            break;
        }
    }
    for (x = 0; x < 15; x++) {
        if (cardSame(hand, index, value+x, numberOfOccurences = 2) === true) {
            break;
        } 
      }  

    if (x > 0 && x != 15 && y > 0 && y != 15 && x != y) {
        return true;
    } else return false;
}

//Check if we have a flush
function flush(hand, index, value) {
    const a = oneColor(hand);
    const b = straightFlush (hand, index, value);
    const c = royalFlush (hand, index, value+10);

    if (a === true && b === false && c === false) {
        return true;
    } else return false;
}
//Check if we have a straight
function straight(hand, index, value) {
    const a = oneColor(hand);
    let x;
    for (x = 14; x > 1; x--) {
        if ((pairCheckFive(hand, index, value+x) === true) && (a === false)) {
            return true;
        }  else  if ((pairCheckFive(hand, index, value+x) === true) && (a === true)) {
            return false;
        } 
    }

}
//Check if we have three of a kind
function threeOfAKind (hand, index, value, numberOfOccurences) {
    let x;
    let y;
    for (y = 0; y < 15; y++) {
        if (cardSame(hand, index, value+y, numberOfOccurences = 3) === true) {
            break;
        }
    }
    for (x = 0; x < 15; x++) {
        if (cardSame(hand, index, value+x, numberOfOccurences = 2) === true) {
            break;
        } 
      }  

    if (y > 0 && y != 15 && x === 15) {
        return true;
    } else return false;
}
//Check if we have two pairs
function twoPair (hand, index, value, numberOfOccurences) {
    let x;
    let y;
    for (y = 0; y < 15; y++) {
        if (cardSame(hand, index, value+y, numberOfOccurences = 2) === true) {
            break;
        }
    }
    for (x = 0; x < 15; x++) {
        if (cardSame(hand, index, value+x, numberOfOccurences = 2) === true) {
            if (x === y) {
                continue;
            }            
            else if (x != y) {   
                break;
            }   
        } 
      }  

    if (x > 0 && x != 15 && y > 0 && y != 15 && x != y) {
        return true;
    } else return false;
}
//Check if we have a pair
function pair (hand, index, value, numberOfOccurences) {
    const a = fullHouse(hand, index, value, numberOfOccurences)
    const b = threeOfAKind (hand, index, value, numberOfOccurences)
    const c = twoPair (hand, index, value, numberOfOccurences)

    let y;
    for (y = 0; y < 15; y++) {
        if (cardSame(hand, index, value+y, numberOfOccurences = 2) === true) {
            break;
        }
    }

    if (a === false && b === false && c === false && y != 15) {
        return true;
    } else return false;
}

//Check for the highest card
function highCard (hand, index) {
    const b = [(cardStrength(hand, index)), (cardStrength(hand, index+1)), (cardStrength(hand, index+2)), (cardStrength(hand, index+3)), (cardStrength(hand, index+4))]
    return Math.max(...b);
} 

//Displays in text the highest card
function highCardText (hand,index) {
   
    const b = [(cardStrength(hand, index)), (cardStrength(hand, index+1)), (cardStrength(hand, index+2)), (cardStrength(hand, index+3)), (cardStrength(hand, index+4))]
    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
    
        var max = arr[0];
        var maxIndex = 0;
    
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
    
        return maxIndex;
    }
    
    return (
        numberCalculation(hand,indexOfMax(b)) + colorCalculation (hand, indexOfMax(b))
    )
}
//Determines the player's current hand
function handCheck (hand) {

    // This is amazing, I never thought of something like that..
    const x = true;
    switch(x) {
        case (royalFlush (hand, 0, 0)):
            return {
                strength: 10,
                highestCard: highCard (hand,0)
            };
        case (straightFlush (hand, 0, 0)):
            return {
                strength: 9,
                highestCard: highCard (hand,0)
            }
        case (fourOfAKind(hand, 0, 0, 0)):
            return {
                strength: 8,
                highestCard: highCard (hand,0)
            }
        case (fullHouse(hand, 0, 0, 0)):
            return {
                strength: 7,
                highestCard: highCard (hand,0)
            }
        case (flush(hand, 0, 0)):
            return {
                strength: 6,
                highestCard: highCard (hand,0)
            }
        case (straight(hand, 0, 0)):
            return {
                strength: 5,
                highestCard: highCard (hand,0)
            }
        case (threeOfAKind (hand, 0, 0, 0)):
            return {
                strength: 4,
                highestCard: highCard (hand,0)
            }
        case (twoPair (hand, 0, 0, 0)):
            return {
                strength: 3,
                highestCard: highCard (hand,0)
            }
        case (pair (hand, 0, 0, 0)):
            return {
                strength: 2,
                highestCard: highCard (hand,0)
            }
        default: 
            return {
                strength: 1,
                highestCard: highCard (hand,0)
            }
    }

}

// #region Remove code comments
//Console for testing
//console.log("ROYAL FLUSH");
//console.log(royalFlush(myHand1, 0, 0));
//console.log("STRAIGHT FLUSH");
//console.log(straightFlush(myHand2, 0, 0));
//console.log("FOUR OF A KIND");
//console.log(fourOfAKind(myHand3, 0, 0, 0));
//console.log("FULL HOUSE");
//console.log(fullHouse(myHand4, 0, 0, 0));
//console.log("FLUSH");
//console.log(flush(myHand5, 0, 0));
//console.log("STRAIGHT");
//console.log(straight(myHand6, 0, 0));
//console.log("THREE OF A KIND");
//console.log(threeOfAKind(myHand7, 0, 0, 0));
//console.log("TWO PAIR");
//console.log(twoPair(myHand8, 0, 0, 0));
//console.log("PAIR");
//console.log(pair(myHand9, 0, 0, 0));
//console.log("HIGH CARD");
//console.log(highCard(myHand4, 0));
//console.log(highCardText(myHand4, 0));
// console.log("------------------------------------------------------");
// console.log(handCheck(myHand1, 0, 0, 0));
// console.log("------------------------------------------------------");
// #endregion Remove code comments

module.exports = {
  handCheck,
};

/* Notes 
 * Variable names should be distinct instead of x and y.
 * Replace function fnName() with const fnName = () => { ... } (we will explain why and the differences).
 * Try refreshing the usage of map, filter, reduce functions and apply them instead of four statement (if it's possible)
*/
