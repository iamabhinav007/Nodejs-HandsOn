

const fs = require('fs')

fs.writeFileSync('notes.text','this file is created with respect to the challenge')

const getNotes = ()=> console.log('Your notes ...')

module.exports = getNotes

