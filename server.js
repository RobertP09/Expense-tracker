const config = require('config');
const connectDB = require('./config/db');
const express = require('express');
const PORT = config.get('PORT');

const app = express();

app.use(express.json({ extended: false }));

// Routes
app.use('/', (req, res) => {
    console.log('We here bois');
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});