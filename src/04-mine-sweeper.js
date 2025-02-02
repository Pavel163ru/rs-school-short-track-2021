/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const maxi = matrix.length;
  const maxj = matrix[0].length;
  const field = [];
  for (let i = 0; i < maxi; i++) {
    field.push([]);
    for (let j = 0; j < maxj; j++) {
      field[i].push(0);
      const left = j === 0 ? 0 : j - 1;
      const top = i === 0 ? 0 : i - 1;
      const right = j + 1 === maxj ? j : j + 1;
      const bottom = i + 1 === maxi ? i : i + 1;
      for (let y = top; y <= bottom; y++) {
        for (let x = left; x <= right; x++) {
          if (!(x === j && y === i)) {
            if (matrix[y][x]) {
              field[i][j]++;
            }
          }
        }
      }
    }
  }
  return field;
}

module.exports = minesweeper;
