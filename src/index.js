const { numberLiteralString } = require("./tools/naming/numberLiteralString");
const { suitLiteralString } = require("./tools/naming/suitLiteralString");

//Poker Game

const cardNumber = (card) => card.slice(1, 3);
const cardSuitChar = (card) => card.charAt[0];
const cardStrength = (card) => parseInt(cardNumber(card), 10);

//Turns all cards into numbers
const cardsToNumbers = (hand) => {
  const handNumbersOnly = hand.map(element => element.slice(1, 3));
  return handNumbersOnly.map(Number);
}
//Check if all cards have the same color
const sameColor = (hand) => {
  const firstCardSuit = cardSuitChar(hand[0]);
  return hand.every((card) => cardSuitChar(card) === firstCardSuit);
};

//Check if we have five cards in sequential order
const pairCheckFive = (hand) => {
  const lowestCard = Math.min(...hand.map((card) => cardStrength(card)));
  return (
    cardsToNumbers(hand).includes(lowestCard) &&
    cardsToNumbers(hand).includes(lowestCard+1) &&
    cardsToNumbers(hand).includes(lowestCard+2) &&
    cardsToNumbers(hand).includes(lowestCard+3) &&
    cardsToNumbers(hand).includes(lowestCard+4)
  ) 
};
//Check for the lowest Ace high hand
const pairCheckFiveAceLow = (hand) => (
    cardsToNumbers(hand).includes(14) &&
    cardsToNumbers(hand).includes(2) &&
    cardsToNumbers(hand).includes(3) &&
    cardsToNumbers(hand).includes(4) &&
    cardsToNumbers(hand).includes(5)
) 
//Check for the highest Ace high hand
const pairCheckFiveAceHigh = (hand) => (
  cardsToNumbers(hand).includes(14) &&
  cardsToNumbers(hand).includes(13) &&
  cardsToNumbers(hand).includes(12) &&
  cardsToNumbers(hand).includes(11) &&
  cardsToNumbers(hand).includes(10)
) 

//Check if a hand has cards of the same number
const cardsDuplicates = (hand) => {
  let counts = {};
  cardsToNumbers(hand).forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  return counts;
}

//Check if we have a royal flush
const isRoyalFlush = (hand) => sameColor(hand) && pairCheckFiveAceHigh(hand);

//Check if we have a straight flush
const isStraightFlush = (hand) => sameColor(hand) && (pairCheckFive(hand) || pairCheckFiveAceLow(hand));

//Check if we have four of a kind
const isFourOfAKind = (hand) => Object.values(cardsDuplicates(hand)).includes(4)

//Check if we have a full house
const isFullHouse = (hand) => Object.values(cardsDuplicates(hand)).includes(3) && Object.values(cardsDuplicates(hand)).includes(2)

//Check if we have a Flush
const isFlush = (hand) => sameColor(hand) && (!pairCheckFive(hand) && !pairCheckFiveAceLow(hand) && !pairCheckFiveAceHigh(hand))

//Check if we have a straight
const isStraight = (hand) => !sameColor(hand) && (pairCheckFive(hand) || pairCheckFiveAceLow(hand) || pairCheckFiveAceHigh(hand));

//Check if we have three of a kind
const isThreeOfAKind = (hand) => Object.values(cardsDuplicates(hand)).includes(3) && Object.values(cardsDuplicates(hand)).includes(1)

//Check if we have two pairs
const isTwoPair = (hand) =>  Object.values(cardsDuplicates(hand)).indexOf(2) === 2

//Check if we have a pair
const isPair = (hand) => Object.values(cardsDuplicates(hand)).indexOf(2) === 1

//Check for the highest card
const highCard = (hand) =>
  Math.max(...hand.map((card) => cardStrength(card)));

//Determines the player's current hand
const handCheck = (hand) => {
  const strength = (() => {
    switch (true) {
      case isRoyalFlush(hand):
        return 10;
      case isStraightFlush(hand):
        return 9;
      case isFourOfAKind(hand):
        return 8;
      case isFullHouse(hand):
        return 7;
      case isFlush(hand):
        return 6;
      case isStraight(hand):
        return 5;
      case isThreeOfAKind(hand):
        return 4;
      case isTwoPair(hand):
        return 3;
      case isPair(hand):
        return 2;
      default:
        return 1;
    }
  })();

  return {
    strength,
    highestCard: highCard(hand),
  };
};

module.exports = {
  handCheck,
};

// 1. no more x y z variables, they should make some literal sense
// 2. replace for loops with map filter reduce ---- find, every, some
// 3. remove else return and just return
// 4. make a function that returns if a hand is straight
// 5. function that give names eg. tools/numberLiteralString.js ...
// 6. Minimize the parameters needed to evaluate
