var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var dbname = process.argv[2];
var url = 'mongodb://localhost:27017/' + dbname;
var collectionName = process.argv[3];
var docID = process.argv[4];

MongoClient.connect(url, function(err, db){
    
    if(err) console.log(err);
    var collection = db.collection(collectionName);
    collection.remove({_id: docID}, function(err, data){
        if(err) throw err;
        db.close();
    });
    
});


