

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/learnyoumongo';
var ageQuery = process.argv[2];

MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    var collection = db.collection('parrots');
        collection.find({age: {$gt: age} }).toArray(function(err, docs){
        console.log(docs);
    });
});