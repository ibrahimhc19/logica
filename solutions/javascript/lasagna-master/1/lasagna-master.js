export function cookingStatus(timerValue){
  if(!timerValue && timerValue!==0){
    return 'You forgot to set the timer.'   
  } else if(timerValue === 0){
    return 'Lasagna is done.'
  } else{
    return 'Not done, please wait.'    
  }
}

export function preparationTime (layers, time){
  if(!time && time!==0){
    let timePerLayer = 2
    return layers.length * timePerLayer
  } else{
    return layers.length * time
  }
}

export function quantities(layers) {
  const ingredients = {
    "noodles": 50,
    "sauce": 0.2
  }
  let noodles = 0
  let sauce = 0
  const quantity = {"noodles": 0, "sauce": 0}
  for (const layer of layers) {
    switch (layer) {
      case "noodles":
        noodles += ingredients['noodles'];
        quantity['noodles'] = noodles
        break
      case "sauce":
        sauce += ingredients['sauce'];
        quantity['sauce'] = sauce
        break
    }
  }
  return quantity
}

export function addSecretIngredient(friendsList, myList) {
  let lastIngredient = friendsList.slice(-1).toString()
  myList.push(lastIngredient)
}


export function scaleRecipe(recipe, portions) {
  const recipeCopy = Object.assign({}, recipe)
  let scaler = portions / 2
  if (portions <= 2 && portions > 0) {
    for (const layer in recipeCopy) {
      recipeCopy[layer] *= scaler
    }
  } else if (portions > 2) {
    for (const layer in recipeCopy) {
      recipeCopy[layer] *= scaler
    }
  }
  return recipeCopy
}

