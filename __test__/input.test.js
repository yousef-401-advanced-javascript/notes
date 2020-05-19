'use strict';

const minimist = require('minimist');
const Input = require('../lib/input.js');

jest.mock('minimist');
minimist.mockImplementation(()=>{
  return {
    a:'i hope to get full mark',
  };
});
describe('input Module', ()=>{
    
  describe('valid()', ()=>{
    it('respect a proper object', () =>{
      const note = new Input();
      //   console.log(note);
      expect(note.valid({u:'hey'})).toBeFalsy();
    });
  });

  describe('valid()', ()=>{
    it('respect a proper object', () =>{
      const note = new Input();
      //   console.log(note);
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
//   describe('new object with keys action payload', ()=>{
//     it('hi', ()=>{
//       const note = new Input();
//       const obj = { a: 'mahmoud' };
//       expect(note.checking().toEqual('mahmoud'));    
//     });
//   });
});