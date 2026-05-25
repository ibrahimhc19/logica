export function seeingDouble(deck) {
  let newDeck = deck.map((number) => number*2);
  return newDeck;
}


export function threeOfEachThree(deck) {
  return deck.reduce((newDeck, card) => {
    if (card == 3) {
      newDeck.push(3,3,3);
    } else {
      newDeck.push(card);
    }
    return newDeck;
  },[])
}

export function middleTwo(deck) {
  let mitad = deck.length/2;
  return deck.slice(mitad-1, mitad+1);
}


export function sandwichTrick(deck) {
  let ext = [deck.shift(),deck.pop()].reverse();
  let mitad = deck.length/2;
  deck.splice(mitad,0, ...ext);
  return deck;
}


export function twoIsSpecial(deck) {
  return deck.filter((card) => card == 2);
}

export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

export function reorder(deck) {
  return deck.reverse();
}
