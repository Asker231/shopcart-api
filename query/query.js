const addUser = "INSERT INTO  userauth(user_name,user_email,password) values ($1,$2,$3)";
const getAllUsers = "SELECT * FROM  userauth";

module.exports = {
    addUser,
    getAllUsers
}