'use strict';
require('@code-fellows/supergoose');
const Notes = require('../model/note-collection.js');

describe('schema collection testing',()=>{
  it('create',()=>{
    const newNote = {
      text:'good game boy',
      category: 'game',
    };

    return Notes.create(newNote).then(results=>{
      Object.keys(newNote).forEach(val=>{
        expect(results[val]).toEqual(newNote[val]);
      });
    });
  });
  it('read',()=>{
    const newNote = {
      text: 'good game boy',
      category:'game',
    };
    return Notes.create(newNote).then(record=>{
      return Notes.read(record.category).then(results=>{
        // console.log(results);
        Object.keys(newNote).forEach((val,index)=>{
        //   console.log(val);
          expect(results[index][val]).toEqual(newNote[val]);
        });
      });
    });
  });
});
