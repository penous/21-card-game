// Get document elements
const draw = document.getElementById('draw');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const resetDiv = document.querySelector('.reset');
const playerHand = document.getElementById('player-hand');
const comHand = document.getElementById('com-hand');
const playerTotal = document.getElementById('player-total');
const comTotal = document.getElementById('com-total');

// Create player const
let player = null;
// Create computer const
let com = null;
// Create deck const
let deck = null;

// Display cards in the hand of the correct player
const displayCards = (player, playerHand) => {
  let hand = '';
  player.hand.forEach((card) => {
    hand += ` ${card.value}`;
  });
  playerHand.innerHTML = hand;
};

// Display total next to the correct player
const displayTotal = (player, playerTotal) => {
  playerTotal.innerHTML = player.total;
};

const startGame = () => {
  // Create deck variable
  deck = new Deck();
  // Fill the deck with Cards
  deck.createDeck();
  // Shuffle the deck
  deck.shuffleDeck();

  // Player
  player = new Player();
  player.drawCard(deck);
  player.drawCard(deck);
  player.countHand();
  displayCards(player, playerHand);
  displayTotal(player, playerTotal);
  // computer
  com = new Player();
  com.drawCard(deck);
  com.drawCard(deck);
  com.countHand();
  displayCards(com, comHand);
  displayTotal(com, comTotal);

  // Show buttons
  draw.disabled = false;
  stop.disabled = false;

  // Hide reset button
  resetDiv.style.display = 'none';
};

const comLogic = (com, deck) => {
  while (com.total <= 15) {
    com.drawCard(deck);
  }
  com.check21();
  com.checkBust();
};

const winLogic = () => {
  if (com.win) player.win = false;
  if (com.bust) player.win = true;

  if (player.checkBust()) com.win = true;
  player.check21();

  if (!player.bust && !com.bust) {
    if (com.total >= player.total) {
      com.win = true;
    } else {
      player.win = true;
    }
  }

  if (player.win && com.win) {
    player.win = false;
    com.win = false;
  }
};

const displayResult = () => {
  if (player.win) alert('Congratulations, You won!');
  if (com.win) alert('The house won!! :(');

  if (!player.win && !com.win) alert("No one won or lost. Sadge :'(");
  resetDiv.style.display = 'block';
};

draw.addEventListener('click', () => {
  player.drawCard(deck);
  displayCards(player, playerHand);
  displayTotal(player, playerTotal);
  if (player.bust) {
    draw.disabled = true;
    winLogic();
    displayResult();
  }
});

stop.addEventListener('click', () => {
  draw.disabled = true;
  stop.disabled = true;
  comLogic(com, deck);
  displayCards(com, comHand);
  displayTotal(com, comTotal);
  winLogic();
  displayResult();
});

reset.addEventListener('click', () => {
  startGame();
});

startGame();
