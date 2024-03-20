const {Router} = require('express')
const {createUser,getAll,getUserById,removeUserById} = require('../controllers/authController')

const route = Router()

route.post('/',createUser)
route.get('/',getAll)
route.get('/:id',getUserById)
route.delete('/:id',removeUserById)



module.exports = route