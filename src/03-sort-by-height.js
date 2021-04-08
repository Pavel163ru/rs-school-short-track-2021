/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = arr;
  const sortArr = arr.filter((v) => v !== -1);
  sortArr.sort((a, b) => a - b);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== -1) {
      sorted[i] = sortArr.pop();
    }
  }
  return sorted;
}

module.exports = sortByHeight;
