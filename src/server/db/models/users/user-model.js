const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String, required: true },
        firstname: { type: String, required: false },
        lastname: { type: String, required: false },
        lastlogin: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)