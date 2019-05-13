const express = require('express');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database/database');

app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

app.use('/api', require('./routes/dinosaure.routes'));

app.listen(3000, () => {
    console.log('Serveur démarré')
});