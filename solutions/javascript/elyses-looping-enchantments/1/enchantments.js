export function cardTypeCheck(stack, card) {
  let num = 0;
  stack.forEach((number) => {
    if (number == card) {
      num++
    }
  }
  );
  return num;
}

export function determineOddEvenCards(stack, type) {
  let num = 0;
  for (let card of stack) {
    let even = (card % 2 == 0)
    if (even == type) {
      num++
    }
  } return num
}
