const { numberLiteralString } = require("./tools/naming/numberLiteralString");

//Poker Game

const cardNumber = (card) => card.slice(1, 3);
const cardSuitChar = (card) => card.charAt[0];

//------Define card stats------
//Defines a card's color
const suitLiteralString = (card) => {
  const suits = {
    H: "Hearts",
    S: "Spades",
    C: "Clubs",
    D: "Diamods",
  };
  const suitChar = card.charAt(0);

  return suits[suitChar];
};
//Defines a card's strength
const cardStrength = (card) => parseInt(cardNumber(card), 10);

//------Color related checks for a hand------
//Defines if a hand has only one color
const isFlush = (hand) => {
  const firstCardSuit = cardSuitChar(hand[0]);
  return hand.every((card) => cardSuitChar(card) === firstCardSuit);
};

//------Number related checks for a hand------
//Check if we have five cards in sequential order
const pairCheckFive = (hand, index, value) => {
  const b = [
    cardStrength(hand[index]),
    cardStrength(hand[index] + 1),
    cardStrength(hand[index] + 2),
    cardStrength(hand[index] + 3),
    cardStrength(hand[index] + 4),
  ];

  if (
    b.includes(value) &&
    b.includes(value + 1) &&
    b.includes(value + 2) &&
    b.includes(value + 3) &&
    b.includes(value + 4)
  ) {
    return true;
  } else return false;
};
//Check for an ace related unique pair
function pairCheckFiveAce(hand, index) {
  const b = [
    cardStrength(hand[index]),
    cardStrength(hand[index] + 1),
    cardStrength(hand[index] + 2),
    cardStrength(hand[index] + 3),
    cardStrength(hand[index] + 4),
  ];
  if (
    b.includes(14) &&
    b.includes(2) &&
    b.includes(3) &&
    b.includes(4) &&
    b.includes(5)
  ) {
    return true;
  }

  return false;
}
//Check if a hand has cards of the same number
function cardSame(hand, index, value, numberOfOccurences) {
  const array = [
    cardStrength(hand[index]),
    cardStrength(hand[index] + 1),
    cardStrength(hand[index] + 2),
    cardStrength(hand[index] + 3),
    cardStrength(hand[index] + 4),
  ];
  const countOccurrences = (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  if (countOccurrences(array, value) === numberOfOccurences) {
    return true;
  }

  return false;
}
//------Winning hand checks------
//Check if we have a royal flush
const royalFlush = (hand, index, value) =>
  isFlush(hand) && pairCheckFive(hand, index, value + 10);

//Check if we have a straight flush
const straightFlush = (hand, index, value) => {
  const a = isFlush(hand);
  let x;
  for (x = 9; x > 1; x--) {
    if (
      (pairCheckFive(hand, index, value + x) ||
        pairCheckFiveAce(hand, index)) &&
      a
    ) {
      return true;
    } else return false;
  }
};
//Check if we have four of a kind
const fourOfAKind = (hand, index, value, numberOfOccurences) => {
  let y;
  for (y = 0; y < 15; y++) {
    if (cardSame(hand, index, value + y, (numberOfOccurences = 4))) {
      break;
    }
  }

  if (y != 15) {
    return true;
  } else return false;
};
//Check if we have a full house
const fullHouse = (hand, index, value, numberOfOccurences) => {
  let x;
  let y;
  for (y = 0; y < 15; y++) {
    if (cardSame(hand, index, value + y, (numberOfOccurences = 3))) {
      break;
    }
  }
  for (x = 0; x < 15; x++) {
    if (cardSame(hand, index, value + x, (numberOfOccurences = 2))) {
      break;
    }
  }

  if (x > 0 && x != 15 && y > 0 && y != 15 && x != y) {
    return true;
  } else return false;
};

//Check if we have a straight
const straight = (hand, index, value) => {
  const a = isFlush(hand);
  let x;
  for (x = 14; x > 1; x--) {
    if (pairCheckFive(hand, index, value + x) && !a) {
      return true;
    } else if (pairCheckFive(hand, index, value + x) && a) {
      return false;
    }
  }
};
//Check if we have three of a kind
const threeOfAKind = (hand, index, value, numberOfOccurences) => {
  let x;
  let y;
  for (y = 0; y < 15; y++) {
    if (cardSame(hand, index, value + y, (numberOfOccurences = 3))) {
      break;
    }
  }
  for (x = 0; x < 15; x++) {
    if (cardSame(hand, index, value + x, (numberOfOccurences = 2))) {
      break;
    }
  }

  if (y > 0 && y != 15 && x === 15) {
    return true;
  } else return false;
};
//Check if we have two pairs
const twoPair = (hand, index, value) => {
  const NUMBER_OF_OCCURENCES = 2;
  let x;
  let y;
  for (y = 0; y < 15; y++) {
    if (cardSame(hand, index, value + y, NUMBER_OF_OCCURENCES)) {
      break;
    }
  }
  for (x = 0; x < 15; x++) {
    if (cardSame(hand, index, value + x, NUMBER_OF_OCCURENCES)) {
      if (x === y) {
        continue;
      } else if (x != y) {
        break;
      }
    }
  }

  if (x > 0 && x != 15 && y > 0 && y != 15 && x != y) {
    return true;
  }

  return false;
};

//Check if we have a pair
const pair = (hand, index, value, numberOfOccurences) => {
  const a = fullHouse(hand, index, value, numberOfOccurences);
  const b = threeOfAKind(hand, index, value, numberOfOccurences);
  const c = twoPair(hand, index, value, numberOfOccurences);

  let y;
  for (y = 0; y < 15; y++) {
    if (cardSame(hand, index, value + y, (numberOfOccurences = 2))) {
      break;
    }
  }

  if (!a && !b && !c && y != 15) {
    return true;
  } else return false;
};
//Check for the highest card
const highCard = (cards) =>
  Math.max(...cards.map((card) => cardStrength(card)));

//Determines the player's current hand
const handCheck = (hand) => {
  const strength = (() => {
    switch (true) {
      case royalFlush(hand, 0, 0):
        return 10;
      case straightFlush(hand, 0, 0):
        return 9;
      case fourOfAKind(hand, 0, 0, 0):
        return 8;
      case fullHouse(hand, 0, 0, 0):
        return 7;
      case isFlush(hand, 0, 0):
        return 6;
      case straight(hand, 0, 0):
        return 5;
      case threeOfAKind(hand, 0, 0, 0):
        return 4;
      case twoPair(hand, 0, 0, 0):
        return 3;
      case pair(hand, 0, 0, 0):
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
