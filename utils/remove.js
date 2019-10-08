
/**
 * @description 
 * @author "mark bashir"
 * @date 2019-10-08
 * @param {object} data
 * @param {string} item
 * @returns (boolean)
 */
function removeItem(data, item) { 
  let removed = false;
  if (data.hasOwnProperty(item)) { 
    delete data[item];
    removed = true;
    
  }
  return removed;
}
module.exports = removeItem;