'use strict';
const noteValidation = require('./lib/input.js');
const executing = require('./lib/notes.js');


let note = new noteValidation;
// console.log(note);
let theExecute = new executing(note);
console.log(theExecute.execute(note));
