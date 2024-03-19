const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    host,
    user,
    port,
    password,
    database
})

module.exports = pool
