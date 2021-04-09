/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length < 1) return str;
  const arr = str.split('');
  const result = [];
  let count = 0;
  const last = arr.reverse().reduce((prev, v) => {
    if (prev === v) {
      count++;
    } else if (count) {
      result.push(prev, count + 1);
      count = 0;
    } else {
      result.push(prev);
    }
    return v;
  });
  result.push(last);
  if (count) {
    result.push(count + 1);
  }
  return result.reverse().join('');
}

module.exports = encodeLine;
