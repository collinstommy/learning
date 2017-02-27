var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


var url = 'mongodb://localhost:27017/learnyoumongo';
var collectionName = 'prices';
var sizeQuery = process.argv[2];

MongoClient.connect(url, function(err, db){
    
    if(err) console.log(err);
    var collection = db.collection(collectionName);
    collection.aggregate([
        {$match: { size: sizeQuery}},
        {$group : { _id: 'average', average: {
           $avg: '$price' 
        }
        }}]).toArray(function(err, data){
            printResults(err, Number(data[0].average).toFixed(2), db);
        });
});


function printResults(err, data, db){
        if(err) throw err;
        console.log(data);
        db.close();
}