var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/learnyoumongo';
var fname = process.argv[2];
var lname = process.argv[3];
var toInsert = {
                firstName : fname,
                lastName : lname
            };

MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    if(err) console.log(err);
    var collection = db.collection('docs');
    console.log(JSON.stringify(toInsert));
    collection.insert(toInsert, function(err, data){
            
            db.close();
    });
    
    
});


