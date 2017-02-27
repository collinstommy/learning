var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


var url = 'mongodb://localhost:27017/learnyoumongo';
var collectionName = 'parrots';
var ageQuery = process.argv[2];

MongoClient.connect(url, function(err, db){
    
    if(err) console.log(err);
    var collection = db.collection(collectionName);
    collection.count({age: {$gt : +ageQuery }}, function(err, data){
        printResults(err, data);
        db.close();
    });
    
});


function printResults(err, data, db){
        if(err) throw err;
        console.log(data);
}