//Poker Game

//VARIABLES
//Basic card stats
const cardColor = ["H", "S", "C", "D"]; //A card's color
const cardNumber = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];//A card's number

//Player
const myCardHand = ["H14","H12","H10","H13","H11"]; //The player's card hand
const myHandStats = []; //The player's hand stats
const myHandStrength = []; //The player's hand strength
const myOneColor = []; //Determines whether the card hand has only one color
const myCurrentHand = []; //the player's winning hand

//CPU
const cpuCardHand = []; //The opponent's card hand
const cpuHandStats = []; //The opponent's hand stats
const cpuHandStrength = []; //The opponent's hand strength
const cpuOneColor = []; //Determines whether the card hand has only one color
const cpuCurrentHand = []; //the opponent's winning hand

//FUNCTIONS
//Creating a card combining the card stats. Randomized for now for testing.
function cardMaker (cColor, cNumber) {
    
    return cColor[Math.floor(Math.random() * cColor.length)] + cNumber[Math.floor(Math.random() * cNumber.length)];
    
}

//Function that adds 5 cards to a hand for testing
function handAdder (aHand){

    let i;

    for (i = 0; i < 5; i++) {
    aHand.push(cardMaker(cardColor, cardNumber));
    }
}

//Measures a hand's strength and stats
function handStrength (aHand, aHandStats, aHandStrength){

    let i2;

    for (i2 = 0; i2 < aHand.length; i2++) {
        aHandStrength[i2] = parseInt((aHand[i2].charAt(1) + aHand[i2].charAt(2)), 10);
        const x = aHand[i2].charAt(1) + aHand[i2].charAt(2);
        const y = aHand[i2].charAt(0);

        switch(x) {
            case '02':
                aHandStats[i2] = "Two ";
                break;
            case '03':
                aHandStats[i2] = "Three ";
                break;
            case '04':
                aHandStats[i2] = "Four ";
                break;
            case '05':
                aHandStats[i2] = "Five ";
                break;
            case '06':
                aHandStats[i2] = "Six ";
                break;
            case '07':
                aHandStats[i2] = "Seven ";
                break;
            case '08':
                aHandStats[i2] = "Eight ";
                break;
            case '09':
                aHandStats[i2] = "Nine ";
                break;
            case '10':
                aHandStats[i2] = "Ten ";
                break;
            case '11':
                aHandStats[i2] = "Jack ";
                break;
            case '12':
                aHandStats[i2] = "Queen ";
                break; 
            case '13':
                aHandStats[i2] = "King ";
                break;
            case '14':
                aHandStats[i2] = "Ace ";
                break;                                                                                                            
            default: 
                aHandStats[i2] = "Nothing ";
        }

        switch(y) {
            case 'H':
                aHandStats[i2] += "of Hearts";
                break;
            case 'S':
                aHandStats[i2] += "of Spades";
                break;
            case 'C':
                aHandStats[i2] += "of Clubs";
                break;
            case 'D':
                aHandStats[i2] += "of Diamonds";
                break;
            default: 
                aHandStats[i2] += "of Undefined";
        }
                
    }
}

//Checks if a hand has only one color in it
function cardColorCalculation (aHand, aColor) {

    const z = aHand[0].charAt(0) + aHand[1].charAt(0) + aHand[2].charAt(0) + aHand[3].charAt(0) + aHand[4].charAt(0);

    if (z === 'HHHHH' || z === 'SSSSS' || z === 'CCCCC' || z === 'DDDDD')  {
        aColor.push('Y');
    } else aColor.push('N')
}

//Checks if there is a winning hand
function handsChecker (aColor, aHandStrength, aCurrentHand) {

    const k = aColor[0].charAt(0);
    const j = String(aHandStrength[0])+String(aHandStrength[1])+String(aHandStrength[2])+String(aHandStrength[3])+String(aHandStrength[4])
    if ( k === 'Y' && j === '1011121314') {
        aCurrentHand.push('Royal Flush');
    } else aCurrentHand.push('None');
}

//Sorts a card hand based on the card strength. For some reason not entirely functional.
function handSort(aHandStrength) {

    aHandStrength.sort()

}


//FUNCTION EXECUTION

//Adding the cards to the hand
//handAdder(myCardHand);
handAdder(cpuCardHand); 

//Applying the function handStrength to calculate the hand stats
handStrength(myCardHand, myHandStats, myHandStrength);
handStrength(cpuCardHand, cpuHandStats, cpuHandStrength);

//Applying the card hand sorter
handSort(myHandStrength);
handSort(cpuHandStrength);

//Applying the color checking function
cardColorCalculation(myCardHand, myOneColor);
cardColorCalculation(cpuCardHand, cpuOneColor);

//Applying the check to see if there are any winning hands
handsChecker(myOneColor,myHandStrength,myCurrentHand);
handsChecker(cpuOneColor,cpuHandStrength,cpuCurrentHand);

//Logging for testing
//console.log('Basic Card Stats')
//console.log('Card Color: ' +cardColor+ ' Card Number: ' +cardNumber);
//console.log('------------------')
//console.log('Random Card')
//console.log('Card Maker: ' +cardMaker(cardColor, cardNumber));
//console.log('------------------')
console.log('MY HAND VARIABLES')
console.log('My Hand: ' +myCardHand);
console.log('My Hand Stats: ' +myHandStats);
console.log('My Hand Strength: ' +myHandStrength);
console.log('Do I have one color? ' +myOneColor);
console.log('My current hand is: ' +myCurrentHand);
console.log('------------------')
console.log('CPU HAND VARIABLES')
console.log('CPU Hand: ' +cpuCardHand);
console.log('CPU Hand Stats: ' +cpuHandStats);
console.log('CPU Hand Strength: ' +cpuHandStrength);
console.log('Does the opponent have one color? ' +cpuOneColor);
console.log('The opponents current hand is: ' +cpuCurrentHand);
console.log('------------------')
