const express = require('express');

// Import our modular routers for /tips and /feedback
const noteRouter = require('./notes')

const app = express();

//already has '/api' at the beggining of the route b/c of server.js file
app.use('/notes', noteRouter);

module.exports = app;