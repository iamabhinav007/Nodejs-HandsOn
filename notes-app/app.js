const validator = require('validator')
const getNotes = require('./notes')

console.log(validator.isEmail('abhinav@example.com'))
console.log(validator.isEmail('abhinav'))