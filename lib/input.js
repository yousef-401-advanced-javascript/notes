'use strict';
const minimist = require('minimist')(process.argv.slice(2));

//Classs
class NoteVatidation {
  constructor() {
    // console.log(minimist);
    if (minimist) {

      if (this.checking(minimist.a || minimist.add)) {
        this.action = 'add';
        this.payload = (minimist.a || minimist.add);
        // console.log(this)
        return this;
      }
      else {
        // console.error('ERROR: not valid input OR flag');
        return { errors: 'ERROR: not valid input OR flag' };
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
    if(minimist){
      return Boolean(this.checking(minimist.a || minimist.add));
    }
    else{
      return false;
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