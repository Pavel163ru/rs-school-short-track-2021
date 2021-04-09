/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const index = -1;
  let point;
  let start = 0;
  let end = array.length;
  while (start !== end && start < (array.length - 1)) {
    point = Math.floor((end - start) / 2) + start;
    if (array[point] === value) {
      return point;
    }
    if (array[point] < value) {
      start = point;
    } else {
      end = point;
    }
  }
  return index;
}

module.exports = findIndex;
