const {Router} = require('express')
const {createUser,getAll} = require('../controllers/authController')

const route = Router()

route.post('/',createUser)
route.get('/',getAll)



module.exports = route