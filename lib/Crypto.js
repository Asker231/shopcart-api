const crypto = require('crypto')

function generatePassword(password){
   let str = crypto.createHmac('sha',password).digest('hex');
   return str
}

module.exports = generatePassword
