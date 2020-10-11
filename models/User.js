const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    image: {
        type: String
    }

});
module.exports = mongoose.model('googleUsers', userSchema);