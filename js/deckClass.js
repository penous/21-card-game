const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const values = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

class Deck {
  constructor() {
    this.cards = [];
  }

  createDeck = () => {
    for (let v of values) {
      let weight = parseInt(v);
      weight = isNaN(weight) ? 10 : weight;
      if (v === 'A') weight = 11;
      for (let s of suits) {
        let card = new Card(v, s, weight);
        this.cards.push(card);
      }
    }
  };

  shuffleDeck = () => {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  };
}
