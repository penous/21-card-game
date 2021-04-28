class Player {
  constructor() {
    this.hand = [];
    this.total = 0;
    this.bust = false;
    this.win = false;
  }

  drawCard = (deck) => {
    this.hand.push(deck.cards.pop());
    this.countHand();
    this.checkBust();
  };

  countHand = () => {
    this.total = this.hand.reduce((total, card) => {
      return total + card.weight;
    }, 0);
  };

  checkBust = () => {
    return (this.bust = this.total > 21 ? true : false);
  };

  check21 = () => {
    if (this.total === 21) return (this.win = true);
  };
}
