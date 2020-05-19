'use strict';

const ADDING = require('../model/note.js');

class ShowingTheOutPut {

  constructor(notesData) {
    // this.execute(notesData)

  }
  
  //for execution the method
  execute(notesData) {
    if(notesData){
      // console.log(notesData);
      switch (notesData.action) {
      case 'add':
      case 'a':
        return this.add(notesData);
      case'delete':
        return this.delete(notesData._id);         
      case'list':
        return this.list(notesData.category);
      default:
        return notesData.errors;            
      }
    }
  }

  //adding a new note
  async add(notesData) {
    if(notesData){
      if (notesData.payload) {
        let afterAdding = {
          text: notesData.payload,
          category :notesData.category,
        };
        const record = new ADDING(afterAdding);
        await record.save();
        console.log(` Note Saved : ${afterAdding.text}`);
        return afterAdding;
      }
    }
  }

  //deleting
  async delete(ID){
    await ADDING.findByIdAndRemove(ID);
    console.log('deleted');
    return 'deleted';
  }

  //listing
  async list(category){
    let selected;
    if(category ===true){
      selected = await ADDING.find();
      // console.log(selected);
    }
    else{
      selected = await ADDING.find({'category':`${category}`});
      // console.log(selected);
    }
    for (let i = 0; i<selected.length; i++){
      console.log(`   ${selected[i].text}`);
      console.log(`       the Category  :${selected[i].category}`,`         Id:   ${selected[i]._id}`);
      console.log('-----------------------------------------------------------------------------------');
    }
  }

}


module.exports = ShowingTheOutPut;