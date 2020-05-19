'use strict';
const minimist = require('minimist')(process.argv.slice(2));

//Classs
class NoteVatidation {
  constructor() {
    console.log(minimist);
    if (minimist) {

      if (this.checking(minimist.a || minimist.add)) {
        this.action = 'add';
        this.payload = (minimist.a || minimist.add);
        this.category = minimist.category ||'default';
        // console.log(this)
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
        // console.log(minimist.list);
        return{
          action: 'list', category:minimist.list,
        };
      }
      else {
        // console.error('ERROR: not valid input OR flag');
        return { errors: 'ERROR: add a test OR the flag should be ((-a,--add "text" --category "thecategory")=> for adding text) --delete "the Id" --list "the category"=>listing the data' };
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
    // console.log(minimist);
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