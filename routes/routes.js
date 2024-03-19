const {Router} = require('express')
const {createUser} = require('../controllers/authController')

const route = Router()
route.get('/',createUser)



module.exports = route