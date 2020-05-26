'use strict';
const minimist = require('minimist')(process.argv.slice(2));
// const schema = require('../model/note-schema.js').schema;

//Classs
class NoteVatidation {
  constructor() {
    // console.log(minimist);
    if (minimist) {

      if (this.checking(minimist.a || minimist.add)) {
        this.action = 'add';
        this.payload = (minimist.a || minimist.add);
        this.category = minimist.category ||'default';
        // console.log(typeof this.category);
        return this;
      }
      else if(minimist.delete){
        if (minimist.delete=== true){
          return {errors:'You should put the Id (--delete "the Id")'};
        }
        return {
          action : 'delete', _id: minimist.delete,
        };
      }
      else if(minimist.list){
        return{
          action: 'list', listCategory:minimist.list,
        };
      }
      else {
        // console.error('ERROR: not valid input OR flag');
        return { errors: `ERROR: You should add a text OR the flag should be:
         ((-a,--add "text" --category "the category")=> for adding text) 
         (--delete "the Id"(for deleting))
         (--list "the category"==output>>(listing the data))` };
      }
    }

  }
  checking(booleanValue) {
    if (booleanValue === true) {
      return undefined;
    }
    else {
      return booleanValue;
    }
  }
  valid() {
    console.log(minimist);
    if(minimist){
      return Boolean(this.checking(minimist.a || minimist.add));
    }
    else{
      return;
    }

  }

}

// another code but not working

// 'use strict';
// // const minimist = require('minimist')(process.argv.slice(2));

// //Classs
// class NoteVatidation {
//   constructor() {
//     // console.log(minimist);

//     const minimist = require('minimist')(process.argv.slice(2));
//     this.forTesting = minimist;
//     if(this.valid(minimist)){
//     //   if (this.checking(minimist.a || minimist.add)) {
//       this.action = 'add';
//       this.payload = (minimist.a || minimist.add);
//       // console.log(this)
//       return this;
//       //   }

//     }
//     else {
//       // console.error('ERROR: not valid input OR flag');
//       return { errors: 'ERROR: not valid input OR flag' };
//     }


//   }

//   valid(validTheInput){
//     if (validTheInput){
//       let theValidation = validTheInput.a||validTheInput.add;
//       if (theValidation === true){
//         return false;
//       }
//       return true;
//     }
//     else{return false;}
//   }

// }



// module.exports = NoteVatidation;

module.exports = NoteVatidation;