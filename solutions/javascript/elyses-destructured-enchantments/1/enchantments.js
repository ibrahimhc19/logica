export function getFirstCard(deck) {
  return deck[0];
}

export function getSecondCard(deck) {
  return deck[1];
}

export function swapTopTwoCards(deck) {
  let rearrange = deck.shift();
  deck.splice(1,0,rearrange)
  return deck
}

export function discardTopCard(deck) {
  let firstCard = deck.shift()
  let newDeck = []
  newDeck.push(firstCard, deck)
  return newDeck
}

const FACE_CARDS = ['jack', 'queen', 'king'];

export function insertFaceCards(deck) {
  if (deck.length == 0) {
    deck[0] = undefined
  }
  for (let i = 0; i < FACE_CARDS.length; i++) {
    deck.splice(i + 1, 0, FACE_CARDS[i]);
  }
  return deck
}