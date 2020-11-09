//Poker Game
const cardNumber = (card) => card.slice(1, 3);
const cardSuitChar = (card) => card.charAt(0);
const cardStrength = (card) => parseInt(cardNumber(card), 10);

//Check for 5 cards in order including ace
const pairCheckFiveAce = (hand) => (
  hand.map(card => cardStrength(card)).includes(14) &&
  hand.map(card => cardStrength(card)).includes(2) &&
  hand.map(card => cardStrength(card)).includes(3) &&
  hand.map(card => cardStrength(card)).includes(4) &&
  hand.map(card => cardStrength(card)).includes(5)
) 

//Check if a hand has cards of the same number
const cardsDuplicates = (hand) => {
  let counts = {};
  hand.map(card => cardStrength(card)).forEach((x) => { counts[x] = (counts[x] || 0)+1; });
  return Object.values(counts);
}

//Check if we have a royal flush
const isRoyalFlush = (hand) => isFlush(hand) && isStraight(hand) && highCard(hand) === 14;

//Check if we have a straight flush
const isStraightFlush = (hand) => isFlush(hand) && (isStraight(hand) || pairCheckFiveAce(hand));

//Check if we have four of a kind
const isFourOfAKind = (hand) => cardsDuplicates(hand).includes(4)

//Check if we have a full house
const isFullHouse = (hand) => cardsDuplicates(hand).includes(3) && cardsDuplicates(hand).includes(2)

//Check if we have a flush
const isFlush = (hand) => {
  const firstCardSuit = cardSuitChar(hand[0]);
  return hand.every((card) => cardSuitChar(card) === firstCardSuit);
};

//Check if we have a straight
const isStraight = (hand) => {
  const lowestCard = Math.min(...hand.map((card) => cardStrength(card)));
  return (
    hand.map(card => cardStrength(card)).includes(lowestCard) &&
    hand.map(card => cardStrength(card)).includes(lowestCard+1) &&
    hand.map(card => cardStrength(card)).includes(lowestCard+2) &&
    hand.map(card => cardStrength(card)).includes(lowestCard+3) &&
    hand.map(card => cardStrength(card)).includes(lowestCard+4)
  ) 
};

//Check if we have three of a kind
const isThreeOfAKind = (hand) => cardsDuplicates(hand).includes(3) 

//Check if we have two pairs
const isTwoPair = (hand) =>  cardsDuplicates(hand)[2] === 2

//Check if we have a pair
const isPair = (hand) => cardsDuplicates(hand).includes(2)

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
