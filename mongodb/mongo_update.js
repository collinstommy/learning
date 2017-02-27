var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var dbname = process.argv[2];
var url = 'mongodb://localhost:27017/' + dbname;


MongoClient.connect(url, function(err, db){
    
    if(err) console.log(err);
    var collection = db.collection('users');
    collection.update({username: "tinatime"}, {$set : { age: 40}}, function(err, data){
            if(err) throw err;
            db.close();
    });
    
    
});


