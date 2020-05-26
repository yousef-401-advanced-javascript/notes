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
if(note.action === 'add'){
  console.log(note.valid());

}
let theExecute = new executing(note);
theExecute.execute(note).then(()=>{
  mongoose.disconnect();
});
  
