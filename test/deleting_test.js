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
           assert(char.isNew === false);
           done();
       });
    });
    
    // Create tests
    it('Deletes one record from the database', function(){

        MarioChar.findOneAndDelete({name: 'Yoshi'}).then(function(done){
           MarioChar.findOne({name: 'Yoshi'}).then(function(result){
              assert(result === null);
              done();
           });
        });
    });
});
