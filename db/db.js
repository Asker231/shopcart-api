const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    host:"localhost",
    user:"postgres",
    port:1998,
    password:"199823",
    database:"users"
})

module.exports = pool
