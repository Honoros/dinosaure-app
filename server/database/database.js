const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/dinosaure-db';

mongoose.connect(DB_URL, {useNewUrlParser: true, useFindAndModify: false})
        .then(db =>
            console.log("Connecté à la base de donnée")
        )
        .catch(err =>
            console.error(err)
        );

module.exports = mongoose;