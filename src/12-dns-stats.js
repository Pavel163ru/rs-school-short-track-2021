/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains.map((v) => v.split('.').reverse());
  const result = arr.reduce((acc, v) => {
    v.reduce((aurl, part) => {
      const url = `${aurl}.${part}`;
      acc[url] = acc[url] ? acc[url] + 1 : 1;
      return url;
    }, '');
    return acc;
  }, {});
  return result;
}

module.exports = getDNSStats;
