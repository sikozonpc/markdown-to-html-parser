const { clearInitialSpaces, getContentInLine } = require('./helper')

function isHeader (line) {
  // quick check to see if it can be a header
  if (!line.includes('#')) {
    return false
  }

  let headerCount = 0
  line = clearInitialSpaces(line)

  // if the first char is not a # after cleaning the whitespaces
  // then its not a header
  if (line[0] !== '#') return {
    type: 'p',
    result: `<p>${getContentInLine(line, 0)}</p>`
  }

  for (let char of line) {
    // if its a space it means the declaration is end
    if (char === ' ') {
      return {
        type: 'h'+headerCount, 
        result: `<h${headerCount}>${getContentInLine(line, char)}</h${headerCount}>`,
      }
    }
    if (char === '#') {
      if (headerCount === 6) return {
        type: 'p',
        result: `<p>${getContentInLine(line, 0)}</p>`
      }
      else headerCount++
    }
  }
}

function isList (line) {
  if (!line.includes('-')) {
    return false
  }

  let symbolCount = 0

  line = clearInitialSpaces(line)
  if (line[0] !== '-') return {
    type: 'p',
    result: `<p>${getContentInLine(line, 0)}</p>`
  }

  for (let char of line) {
    if (char === ' ') {
      return {
        type: 'li',
        result: `<li>${getContentInLine(line, char)}</li>`,
      }
    }
    console.log(char)
    if (char === '-' || char.match(/[0-9]+\./)) {
      if (symbolCount === 1) return
      else symbolCount++
    }
  }
}

function isParagraph (line) {
  line = clearInitialSpaces(line)
  let allGood = true
  // any word or number 
  // 10. Hello world <-- FALSE
  // Ola 10. Hello world <-- TRUE

  if (line[0].match(/\w/)) {
    // making sure its not a unordered list
    for (let i=0; i < line.length; i++) {
      if (line[i].match(/[0-9]/) && line[i+1] === '.') {
        allGood = false
      }
    }
  }
  if (allGood) {
    return {
      type: 'p',
      result:`<p>${line}</p>`,
    }
  } else {
    return {
      type: 'li',
      result: `<li>${line}</li>`
    }
  }
}


module.exports = {
  isHeader,
  isList,
  isParagraph,
}