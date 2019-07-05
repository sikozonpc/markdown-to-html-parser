/**
 * removes all whitespaces
 * @param {string} str
 * @returns {string[]}
*/
function skipSpaces (str) {
  return str.replace(/\s/g,'')
}


module.exports = {
  skipSpaces,
}