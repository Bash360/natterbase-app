function getLowestIndex(magicalSource, distance, n) {
	let currentMagicalSource = magicalSource[0];
	let lowestIndex = 0;
  for (let index = 0; index < n; index++) {
 
		if (currentMagicalSource >= distance[index]) {
      let nextMagicalSource = magicalSource[index + 1] ? magicalSource[index + 1] : 0;
      currentMagicalSource = magicalSource[index] - distance[index] + nextMagicalSource;
    
     
		} else {
			if (index === magicalSource.length-1 && magicalSource[index] < distance[index]) return -1;
			currentMagicalSource = magicalSource[index+1];
			lowestIndex = index+1;
			continue;
		}
  }
 
	return lowestIndex;
}
module.exports = getLowestIndex;

