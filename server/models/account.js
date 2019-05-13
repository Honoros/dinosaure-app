const mongoose = require('mongoose')
const { Schema } = mongoose

const AccountSchema = new Schema({
    login: { type: String, required: true },
    mdp: { type: String, required: true }
})

module.exports = mongoose.model('Account', AccountSchema)