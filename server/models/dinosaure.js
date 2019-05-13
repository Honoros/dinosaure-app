const mongoose = require('mongoose')
const { Schema } = mongoose

const DinosaureSchema = new Schema({
    login: { type: String, required: true },
    mdp: { type: String, required: false },
    age: { type: Number, required: true },
    famille: { type: String, required: true },
    race: { type: String, required: true },
    nourriture: { type: String, required: true },
    proprio_key: { type: String, required: false }
})

module.exports = mongoose.model('Dinosaure', DinosaureSchema)