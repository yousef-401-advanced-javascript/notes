'use strict';

function ShowingTheOutPut(notesData) {
    // console.log(notesData)
    this.execute(notesData)
}
//for execution the method
ShowingTheOutPut.prototype.execute = function (notesData) {
    switch (notesData.action) {
        case 'add':
        case'a':
            this.add(notesData)        
            break;
    
        default:
            console.error(notesData.errors)
            break;
    }

}

//adding anew note
ShowingTheOutPut.prototype.add = function (notesData) {
    if (notesData.payload) {
        let afterAdding = {
            noteText: notesData.payload,
            id: Math.round(Math.random() * 10000000000000000)
        }
        console.log(` Adding Note : ${afterAdding.noteText}`)
    }
    

}
module.exports = ShowingTheOutPut;