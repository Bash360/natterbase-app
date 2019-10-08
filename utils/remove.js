function removeItem(data, item) { 
  let removed = false;
  if (data.hasOwnProperty(item)) { 
    delete data[item];
    removed = true;
    
  }
  return removed;
}
module.exports = removeItem;