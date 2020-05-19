'use strict';
require('dotenv').config();

const mongoose = require('mongoose');

const noteValidation = require('./lib/input.js');
const executing = require('./lib/notes.js');

//connecting
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology:true,
});


let note = new noteValidation;
// console.log(note);
let theExecute = new executing(note);
console.log(theExecute.execute(note));
