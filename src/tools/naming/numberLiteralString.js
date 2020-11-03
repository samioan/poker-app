const numberLiteralString = (card) => {
  const cardNumber = cardNumber(card);

  const numbers = {
    "02": "Two",
    "03": "Three",
    "04": "Four",
    "05": "Five",
    "06": "Six",
    "07": "Seven",
    "08": "Eight",
    "09": "Nine",
    "10": "Ten",
    "11": "Jack",
    "12": "Queen",
    "13": "King",
    "14": "Ace",
  };

  return numbers[cardNumber];
};

module.exports = { numberLiteralString };
