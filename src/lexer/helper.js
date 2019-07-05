
function clearInitialSpaces (str) {
  return str.replace(/^\s+|\s+$/g,'')
}

function getContentInLine (line, startIndex) {
  // add 1 because of the space after the symbol
  return line.slice(line.indexOf(startIndex) + 1) 
}

module.exports = {
  clearInitialSpaces,
  getContentInLine,
}