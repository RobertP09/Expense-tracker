const config = require('config');
const connectDB = require('./config/db');
const express = require('express');
const PORT = config.get('PORT');
const path = require('path');

// Start App
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Defined external routes -- outside server file
app.use('/api/transactions', require('./routes/transactions'));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Routes
app.use('/', (req, res) => {
    res.sendStatus(200);
});


// For Prod
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


// App ready to listen
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});