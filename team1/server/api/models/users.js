const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: Number,
    firstName: String,
    lastName: String,
    username: String
})

const UserSchema = mongoose.model('Users', userSchema);

module.exports = UserSchema;