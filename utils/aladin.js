function aladin(magicalSource, distance, n) { 
  let currentSource = magicalSource[0];
  let lowestIndex = 0;
  for (let index = 0; index < n; index++) {
   
    if (currentSource >= distance[index]) {
      let nextMagicalSource = magicalSource[index + 1] ? magicalSource[index + 1] : 0;
      currentSource = magicalSource[index] - distance[index] + nextMagicalSource;
      
    } else { 
      if (index === n-1 && magicalSource[index]<distance[index]) return -1;
      currentSource = magicalSource[index];
      lowestIndex = index;
      continue;
    }
  }
  return lowestIndex;

}
module.exports = aladin;