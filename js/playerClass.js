class Player {
  constructor() {
    this.hand = [];
    this.total = 0;
  }

  drawCard = (deck) => {
    this.hand.push(deck.pop());
  };

  countHand = () => {
    this.total = this.hand.reduce((total, card) => {
      return total + card.weight;
    }, 0);
  };
}
