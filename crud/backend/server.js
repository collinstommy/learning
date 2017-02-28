var express = require('express');
var mongodb = require('mongodb');

const app = express();
const dburl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dburl, function(err, db){
  app.listen(8080, () => console.log('server running on port 8080'));

  app.get('/api/games', (req, res)  => {
    db.collection('games').find({}).toArray((err, games) => {
      res.json({ games } );
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it,"
      }
    })
  })
});

