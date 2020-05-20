'use strict';

const Input = require('../lib/input.js');
jest.resetAllMocks();
jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(()=>{
  // console.log(minimist);
  return {
    a:'i hope to get full mark',
  };
});
// console.log(minimist);


describe('input Module', ()=>{
    
  describe('invalid()', ()=>{
    it('', () =>{
      const note = new Input();
      //   console.log(note);
      expect(note.valid({u:'hey'})).toBeFalsy();
    });
  });

  describe('invalid()', ()=>{
    it('respect a proper object', () =>{
      const note = new Input();
      // console.log(minimist.a);
      expect(note.valid()).toBeFalsy();
    });
  });

  describe('valid()', ()=>{
    it('respect a proper object', () =>{
      const note = new Input();
      //   console.log(note);
      expect(note.valid({add:'hey man'})).toBeFalsy();
    });
  });

  describe('valid()', ()=>{
    it('respect a proper object', () =>{
      const note = new Input();
      //   console.log(note);
      expect(note.valid({ajhf:'hi'})).toBeFalsy();
    });
  });

});