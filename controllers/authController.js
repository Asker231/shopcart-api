const pool = require('../db/db')
const {addUser,getAllUsers} = require('../query/query')

function createUser(req,res){

    const{user_name,user_email,password} = req.body

    try {
 pool.query(addUser,[user_name,user_email,password],(err,result)=>{
            if(!err)console.log(result);
        })
    } catch (error) {
        console.log(error);
    }
    res.end()
}

function getAll(req,res){
    try {
        pool.query(getAllUsers,(err,result)=>{
            if(!err)console.log(result.rows);
        })
    } catch (error) {
        console.log(error);
    }
    res.end()
}


module.exports = {
    createUser,
    getAll
}
