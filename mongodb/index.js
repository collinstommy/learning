var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/learnyoumongo';
var ageQuery = parseInt(process.argv[2]);

MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    if(err) throw err;
    var collection = db.collection('parrots');
        collection.find(
            {age: 
                {$gt: ageQuery} 
            },
            {
                name: 1,
                age: 1,
                _id: 0
            }).toArray(function(err, docs){
        console.log(docs);
    });

    db.close();
});


