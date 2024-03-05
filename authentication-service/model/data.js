const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    metamaskId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
