const grammer = require('./grammer')
const lexical = require('./lexer')
const { skipSpaces } = require('./utils/utils')

module.exports = Parser = function (data, options ) {
  if (typeof data !== 'string' || !data.length) return null

  const flavour = options.flavour ? options.flavour : 'default'

  const outpt = []
  const lines = data.split('\n')
  let exp = ''
  for (let l of lines) {
    // add <br> if there is a spacing
    if (l.length === 0) {
      outpt.push('<br>')
      continue
    }
    // this means its a expresstion
    exp = identifyExpression(l)

    outpt.push(exp.result)
    
    // this mean its a paragraph 
    if (exp == false) {
      outpt.push(exp)
    }
  }
  return outpt
}
// Instantiate a grammer
//const GRAMMER = grammer()

/**
 *
 * @param {string} data 
 * @returns {boolean | string}
 */
function identifyExpression(line) {
  let eval

  eval = lexical.isParagraph(line)
  if (eval) return eval
  eval = lexical.isHeader(line)
  if (eval) return eval
  eval = lexical.isList(line)
  if (eval) return eval

  console.log('EVAL: ', eval, line)

  return eval
}