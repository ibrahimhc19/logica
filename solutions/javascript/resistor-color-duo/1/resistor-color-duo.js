export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const decodedValue = (band) => {
  let code = new String();
  for (let i = 0 ; i < 2 ; i++) {
    code += COLORS.indexOf(band[i]);
  };
  return parseInt(code);

};