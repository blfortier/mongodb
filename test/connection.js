const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true } );

mongoose.connection.once('open', function(){
   console.log('Connection has been made, now make fireworks...'); 
}).on('error', function(error){
    console.log('Connection error: ', error);
});



