//Poker Game

//Defines the basic stats of a card: Its color and its number.
var cardColor = ["Hearts", "Spades", "Clubs", "Diamonds"];
var cardNumber = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];


//Creating a card combining the card stats. Randomized for now for testing.
function cardMaker (cColor, cNumber) {
    
    return cColor[Math.floor(Math.random() * cColor.length)] + cNumber[Math.floor(Math.random() * cNumber.length)];
    
}

//The player's card hand
var myCardHand = [];

//The opponent's card hand
var cpuCardHand = [];

//Function that cards to a hand for testing
function myHandAdder (myHand){
    
    myHand.push(cardMaker(cardColor, cardNumber));
    
}

//Loop that adds 5 cards to the player's and opponent's hand for testing
var i;
for (i = 0; i < 5; i++) {
  myHandAdder(myCardHand);
  myHandAdder(cpuCardHand);  
}

//Measures a hand's strength
function handStrength (aHand){
       
}

//Logging for testing
console.log('Card Stats: ' +cardColor+ ' ' +cardNumber);
console.log('Card Maker: ' +cardMaker(cardColor, cardNumber));
console.log('My Hand: ' +myCardHand);
console.log('CPU Hand: ' +cpuCardHand);

//TODO: Complete the function that calculates a hand strength.
//Calculation based on array filtering of specific strings and assigning them a number
//Then make another function that compares each hand's number.

