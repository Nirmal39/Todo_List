// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1/TodoList_db');

// accquire a connection(to check if it is successful)
const db = mongoose.connection;

// if error console it out using console.error
db.on('error',console.error.bind(console,"error connecting to db"));

// good to go then print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
});