const addUser = "INSERT INTO  userauth(user_name,user_email,password) values ($1,$2,$3)";
const getAllUsers = "SELECT * FROM  userauth";
const getOneUser = "SELECT *  FROM userauth WHERE id = $1"
const deleteOneUser = "DELETE FROM userauth WHERE id = $1";


module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    deleteOneUser
}