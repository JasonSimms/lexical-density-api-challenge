// File: index.js
// Connect to MongoDB and run an express API

// Dependencies
const express = require("express");
const app = express();
const chalk = require("chalk");
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);

// Imports
const config = require("./src/utils/config");
// const apiRoutes = require(`./src/routes/api-routes`);


mongoose.connect(config.MONGODB_URI,{ useNewUrlParser: true })

app.get("/", (req, res) => res.send(`Hello World`));




mongoose.connection.on('connected', () => {
    console.log(chalk.green.bold('Connected to Mongo!'))

    app.listen(config.PORT, () => {
        console.log(chalk.blue.bold('Lexical Density Calculator by JSimms is running: http://localhost:' + config.PORT))
    })
})