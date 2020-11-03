const suitLiteralString = (card) => {
    const suits = {
      H: "Hearts",
      S: "Spades",
      C: "Clubs",
      D: "Diamonds",
    };
    const suitChar = card.charAt(0);
  
    return suits[suitChar];
  };

  module.exports = { suitLiteralString };