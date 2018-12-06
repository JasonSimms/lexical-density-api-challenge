// File: index.js
// Connect to MongoDB and run an express API

// Dependencies
const express = require('express')
const app = express();
const chalk = require('chalk')


// Imports
const config = require('./src/utils/config')

app.get('/', (req,res) => res.send(`Hello World`));

app.listen(config.PORT, () => {
    console.log(chalk.blue.bold('Lexical Density Calculator by JSimms is running: http://localhost:' + config.PORT))
})