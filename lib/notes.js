'use strict';

class ShowingTheOutPut {
  constructor(notesData) {
    // this.execute(notesData)

  }
  //for execution the method
  execute(notesData) {
    if(notesData){
      switch (notesData.action) {
      case 'add':
      case 'a':
        return this.add(notesData);
            
      
      default:
        return notesData.errors;
            
      }

    }

  }

  //adding anew note
  add(notesData) {
    if(notesData){
      if (notesData.payload) {
        let afterAdding = {
          noteText: notesData.payload,
          id: Math.round(Math.random() * 10000000000000000),
        };
        console.log(` Adding Note : ${afterAdding.noteText} id = ${afterAdding.id}`);
        return afterAdding;
      }


    }


  }

}


module.exports = ShowingTheOutPut;