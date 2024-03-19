const addUser = "INSERT INTO users(user_name,user_email,user_password) values ($1,$2,$3)";


module.exports = {
    addUser
}