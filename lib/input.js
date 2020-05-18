'use strict';
const minimist = require('minimist')(process.argv.slice(2));

//constructoe
function NoteVatidation(){
    // console.log(minimist)
    if(minimist.a||minimist.add){
        this.action = Object.keys(minimist)[1]
        this.payload = minimist.a||minimist.add
        // console.log(this)
        return this;
    }
    else{
        // console.error('ERROR: not valid input OR flag');
        return {errors:'ERROR: not valid input OR flag'};
    }
    
}



module.exports = NoteVatidation;