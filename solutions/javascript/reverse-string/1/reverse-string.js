export const reverseString = (str) => {
  if (str == '') {
    return '';
  }
  let strArr = [...str].reverse();
  let word = new String();
  for (const letter of strArr) {
    word += letter;
  }
  return word;

};