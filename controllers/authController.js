const pool = require('../db/db')
const {addUser,getAllUsers,getOneUser,deleteOneUser} = require('../query/query')
const md5 = require('md5')

async function createUser(req,res){
    const{user_name,user_email} = req.body
    let hashPassword = md5(req.body.password)
    
    console.log(hashPassword);
    try {
await pool.query(addUser,[user_name,user_email,hashPassword],(err,result)=>{
            if(!err)console.log(result);
        })
    } catch (error) {
        console.log(error);
    }
    res.end()
}
async function getAll(req,res){
    try {
       await pool.query(getAllUsers,(err,result)=>{
            if(!err)console.log(result.rows);
        })
    } catch (error) {
        console.log(error);
    }
    res.end()
}

async function getUserById(req,res){
    const id = req.params.id
    try {
       await pool.query(getOneUser,[id],(err,result)=>{
            if(!err)console.log(result.rows);
            console.log(`Нет данных по id = ${id}`);
        })
    } catch (error) {
        console.log(error);
    }
    res.end()
}

async function removeUserById(req,res){
    const id = req.params.id
    try {
          await pool.query(deleteOneUser,[id],(err,result)=>{
            if(!err){
                console.log("Succsess delete");
                console.log(result.rows);
            }
          })  
    } catch (error) {
        console.log(error);
    }
    res.end()
}
async function logInUser(){
    
}


module.exports = {
    createUser,
    getAll,
    getUserById,
    removeUserById
}
