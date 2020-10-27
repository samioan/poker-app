const { handCheck } = require("../index");

const HAND_TYPE = {
  ROYAL_FLUSH: 10,
  STRAIGHT_FLUSH: 9,
  FOUR_OF_A_KIND: 8,
  FULL_HOUSE: 7,
  FLUSH: 6,
  STRAIGHT: 5,
  THREE_OF_A_KIND: 4,
  TWO_PAIR: 3,
  ONE_PAIR: 2,
  HIGH_CARD: 1,
};

describe("handCheck", () => {
  it('should return "Royal Flush" related result and 14 as highCard', () => {
    // GIVEN
    const hand = ["H14", "H12", "H10", "H13", "H11"];

    // WHEN
    const result = handCheck(hand);

    // THEN
    expect(result).toEqual({
      strength: HAND_TYPE.ROYAL_FLUSH,
      highestCard: 14,
    });
  });

  it('should return "Straight Flush" related result and 14 as highCard', () => {
    // GIVEN
    const hand = ["H14", "H02", "H04", "H03", "H05"];

    // WHEN
    const result = handCheck(hand);

    // THEN
    expect(result).toEqual({
      strength: HAND_TYPE.STRAIGHT_FLUSH,
      highestCard: 14,
    });
  });

  it('should return "Four of a kind" related result and 14 as highCard', () => {
    // GIVEN
    const hand = ["H14", "C14", "D14", "S14", "H05"];

    // WHEN
    const result = handCheck(hand);

    // THEN
    expect(result).toEqual({
      strength: HAND_TYPE.FOUR_OF_A_KIND,
      highestCard: 14,
    });
  });

  it('should return "Full House" related result and 14 as highCard', () => {
    // GIVEN
    const hand = ["H14", "C14", "D14", "H13", "D13"];

    // WHEN
    const result = handCheck(hand);

    // THEN
    expect(result).toEqual({
      strength: HAND_TYPE.FULL_HOUSE,
      highestCard: 14,
    });
  });

  it('should return "Flush" related result and 8 as highCard', () => {
    // GIVEN
    const hand = ["H08", "H03", "H05", "H07", "H04"];

    // WHEN
    const result = handCheck(hand);

    // THEN
    expect(result).toEqual({
      strength: HAND_TYPE.FLUSH,
      highestCard: 8,
    });
  });

  it('should return "Straight" related result and 8 as highCard', () => {
    // GIVEN
    const hand = ["H08", "H06", "H05", "H07", "C04"];

    // WHEN
    const result = handCheck(hand);

    // THEN
    expect(result).toEqual({
      strength: HAND_TYPE.STRAIGHT,
      highestCard: 8,
    });
  });

  it('should return "Three of a kind" related result and 10 as highCard', () => {
    // GIVEN
    const hand = ["H10", "H06", "D10", "C10", "H04"];

    // WHEN
    const result = handCheck(hand);

    // THEN
    expect(result).toEqual({
      strength: HAND_TYPE.THREE_OF_A_KIND,
      highestCard: 10,
    });
  });

  it('should return "Two Pair" related result and 10 as highCard', () => {
    // GIVEN
    const hand = ["H10", "H06", "D10", "C06", "H04"];

    // WHEN
    const result = handCheck(hand);

    // THEN
    expect(result).toEqual({
      strength: HAND_TYPE.TWO_PAIR,
      highestCard: 10,
    });
  });

  it('should return "One Pair" related result and 10 as highCard', () => {
    // GIVEN
    const hand = ["H10", "H06", "D10", "C05", "H04"];

    // WHEN
    const result = handCheck(hand);

    // THEN
    expect(result).toEqual({
      strength: HAND_TYPE.ONE_PAIR,
      highestCard: 10,
    });
  });

  it('should return "High Card" related result and 13 as highCard', () => {
    // GIVEN
    const hand = ["H10", "C13", "D09", "C05", "H04"];

    // WHEN
    const result = handCheck(hand);

    // THEN
    expect(result).toEqual({
      strength: HAND_TYPE.HIGH_CARD,
      highestCard: 13,
    });
  });
});
