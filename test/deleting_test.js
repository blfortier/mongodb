const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Deleting records', function(){
  
    var char;
    
    beforeEach(function(done){
            char = new MarioChar({
            name: 'Yoshi'
        });
        
       
       char.save().then(function(){
           done();
       });
    });
    
    // Create tests
    it('Deletes one record from the database', function(done){

        MarioChar.findOneAndDelete({name: 'Yoshi'}).then(function(){
           MarioChar.findOne({name: 'Yoshi'}).then(function(result){
              assert(result === null);
              done();
           });
        });
    });
});
