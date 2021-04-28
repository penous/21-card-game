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
// const player = { hand: [], total: 0 };
// const cpu = { hand: [], total: 0 };
let deck = [];

const createDeck = () => {
  deck = [];
  for (let v of values) {
    let weight = parseInt(v);
    weight = isNaN(weight) ? 10 : weight;
    if (v === 'A') weight = 11;
    for (let s of suits) {
      let card = { value: v, suit: s, weight: weight };
      deck.push(card);
    }
  }
};

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

createDeck();
shuffleDeck(deck);
