const parser = require('../src/index')

const dummy_data = 
`
# this is H1

## this is H2
### this is H3
#### this is H4
##### this is H5
###### this is H6
####### this is not valid
-- Unorderded list  ### Ola
- what happens if I put another - in the middle xD
#### Hello im a new here - or Im i ??
Hello Im a fuking paragraph
1What fi I start with a number 
1. Is this an order list
`


const result = parser.Parse(dummy_data, {
  flavour: 'default',
})

console.log(result)