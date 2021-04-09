/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = n.toString().split('');
  for (let i = 0; i < number.length; i++) {
    if (number[i] < number[i + 1] || i === number.length - 1) {
      number.splice(i, 1);
      number = number.join('');
      number = parseInt(number, 10);
      return number;
    }
  }
  return number;
}

module.exports = deleteDigit;
