'use strict';
const outputNote = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('note Module',()=>{
    
  it('nothing will logges when the match input is empty', ()=>{
    const theNote = new outputNote();
    theNote.add();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('will logges when the match input', ()=>{
    const theNote = new outputNote();
    theNote.add({payload:'hi',id:'123'});
    expect(console.log).toHaveBeenCalled();
  });


});