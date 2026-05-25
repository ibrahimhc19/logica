export const dna = {
  G : 'C',
  C : 'G',
  T : 'A',
  A : 'U'
};


export const toRna = (strand) => {
if(strand == ''){
 return '';
}
  let result = new String();

  for(let e of strand){

    result+= dna[e];
  }
  return result;
}