export function twoSum(array1, array2) {

  function sum(nums) {
    let sum = ''

    for (let num in nums) {
      num = String(nums[num])
      sum = sum + num
    }
    return Number(sum)
  }

  let sumArray1 = sum(array1)
  let sumArray2 = sum(array2)
  let total = sumArray1 + sumArray2
  return total
}

export function luckyNumber(value) {

  let numToString = String(value);
  let string = ''
  for (const num of numToString) {
    string = num + string
  }

  let reversed = ''
  for (let num = numToString.length - 1; num >= 0; num--) {
    reversed = numToString[num] + reversed
  }
  if (string == reversed) {
    return true
  } else {
    return false
  }
}

export function errorMessage(userInput) {
  if (!userInput && userInput !== 0) {
    return 'Required field';
  } else if (isNaN(userInput) || +userInput === 0){
      return 'Must be a number besides 0';     
    } else {
      return '';
    }
  }
