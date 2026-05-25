
export function needsLicense(kind) {
kind = kind.toLowerCase()
  if(kind == "car" || kind == "truck"){
    return true
  } return false
}


export function chooseVehicle(option1, option2) {
  let choice;
  if (option1 < option2) {
    choice = bChoice(option1);
  } else {
    choice = bChoice(option2);
  }
  return choice;
function bChoice(option) {
  return `${option} is clearly the better choice.`;
}
}


export function calculateResellPrice(originalPrice, age) {
  let resellPrice;

  if (age < 3) {
    resellPrice = originalPrice * 0.8;
  } else if (age >= 3 && age <= 10) {
    resellPrice = originalPrice * 0.7;
  } else {
    resellPrice = originalPrice * 0.5;
  }

  return resellPrice;
}

