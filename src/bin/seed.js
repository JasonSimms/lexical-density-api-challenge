const mongoose = require('mongoose');
const Word = require('../models/wordModel');
const wordList = require('./nonLexicalWords')
const config = require("../utils/config");

console.log(config.MONGODB_URI)
const dbName = config.MONGODB_URI;
mongoose.connect(dbName,{ useNewUrlParser: true });


let words=[];

wordList.forEach(el =>{
words.push({"term": el })
})

// console.log(words)


Word.create(words, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${words.length} words`)
  mongoose.connection.close()
});