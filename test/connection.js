const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://test:test12@ds141671.mlab.com:41671/testaroo');
// Connect to the database before tests run
before(function(done) {
    // connect to mongodb
  // mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true });
  
    mongoose.connection.once('open', function() {
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error) {
        console.log('Connection error: ', error);
    });
});

// Drop the characters collection before each test (delete)
beforeEach(function(done){
   // Drop the collection
   mongoose.connection.collections.mariochars.drop(function(){
       done();
   });
});





