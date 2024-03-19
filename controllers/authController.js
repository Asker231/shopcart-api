const pool = require('../db/db')
const {addUser} = require('../query/query')

async function createUser(req,res){

    const{user_name,user_email,user_password} = req.body

    try {
        await pool.query(addUser,[user_name,user_email,user_password],(err,result)=>{
            if(!err)console.log(result);
        })
    } catch (error) {
        
    }
    res.end()
}

module.exports = {
    createUser
}
