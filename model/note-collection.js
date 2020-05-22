'use strict';

const model = require('./note-schema.js').model;


class Notes{
  constructor(){}

  create(obj){
    const newRecord = new model(obj);
    return newRecord.save();
  }

  read(category){
    if (category===true) {
      return model.find({});
      
    } else {
      return model.find({'category':category});
    }
  }
  delete(_id){
    return model.findByIdAndDelete(_id);
  }
  update(_id, obj){
    return model.findByIdAndUpdate(_id, obj,{new:true});
  }
}
module.exports = new Notes();