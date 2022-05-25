const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    userId: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String , required: true}
})

const LoginSchema = mongoose.model('Logins', loginSchema);

module.exports = LoginSchema;