
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}


export function limesToCut(wedgesNeeded, limes) {
  const wedgesPerLime = {
    small: 6,
    medium: 8,
    large: 10
  }
  let wedges = 0;
  let lime = 0;
  while (wedges < wedgesNeeded && lime < limes.length) {
    let index = limes[lime]
    wedges += wedgesPerLime[index]
    lime++;
  }
  return lime;
}


export function remainingOrders(timeLeft, orders) {

  while(timeLeft > 0){
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift()
  }
  return orders
}
