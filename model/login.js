const mongoose = require('mongoose');

const loginScheme = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const loginModel = mongoose.model("login", loginScheme);
module.exports = loginModel