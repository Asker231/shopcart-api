const crypto = require('crypto')

function generatePassword(){
   let str = crypto.createHmac('sha256','199823asker').digest('hex');
   return str
}

module.exports = generatePassword
