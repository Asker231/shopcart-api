const pool = require('../db/db')
const {addUser,getAllUsers} = require('../query/query')

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

async function getAll(req,res){
    try {
        await pool.query(getAllUsers,(err,result)=>{
            if(!err)console.log(result.rows);
        })
    } catch (error) {
        
    }
    res.end()
}


module.exports = {
    createUser,
    getAll
}
