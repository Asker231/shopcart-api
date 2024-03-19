const addUser = "INSERT INTO users(user_name,user_email,user_password) values ($1,$2,$3)";
const getAllUsers = "SELECT * FROM users";

module.exports = {
    addUser,
    getAllUsers
}