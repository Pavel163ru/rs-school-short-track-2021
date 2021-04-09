/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const renamed = [];
  for (let i = 0; i < names.length; i++) {
    let repeat = 0;

    renamed.forEach((v) => {
      let compare = names[i];
      if (repeat) compare = `${compare}(${repeat})`;
      if (v === compare) {
        repeat++;
      }
    });
    let name = names[i];
    if (repeat) name = `${name}(${repeat})`;
    renamed.push(name);
  }
  return renamed;
}

module.exports = renameFiles;
