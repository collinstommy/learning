var express = require('express');
var mongodb = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const dburl = 'mongodb://localhost/crudwithredux';

function validate(data) {
  let errors = {};
  if (data.title === '') errors.title = "Can't be empty";
  if (data.cover === '') errors.cover = "Can't be empty";
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
}

mongodb.MongoClient.connect(dburl, function (err, db) {
  app.listen(3001, () => console.log('server running on port 3001'));

  app.delete('/api/games/:_id', (req, res) => {
    db.collection('games').deleteOne(
      { _id: new mongodb.ObjectID(req.params._id) },
      (err, result) => {
        if (err) { res.status(500).json({ errors: { global: err } }); return; }
        res.json({});
      }
    );
  });

  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      res.json({ games });
    });
  });

  app.get('/api/games/:_id', (req, res) => {
    db.collection('games').findOne({ _id: new mongodb.ObjectID(req.params._id) }, (err, game) => {
      res.json({ game });
    });
  });

  app.post('/api/games', (req, res) => {
    const { errors, isValid } = validate(req.body);
    if (isValid) {
      const { title, cover } = req.body;
      db.collection('games').insert({ title, cover }, (err, result) => {
        if (err) {
          res.status(500).json({ errors: { global: "Something went wrong with insert" } });
        }
        else {
          res.json({ game: result.ops[0] });
        }
      });
    } else {
      res.status(400).json({ errors });
    }
  });

  app.put('/api/games/:_id', (req, res) => {
    const { errors, isValid } = validate(req.body);
    if (isValid) {
      const { title, cover } = req.body;
      db.collection('games').findOneAndUpdate(
        { _id: new mongodb.ObjectID(req.params._id) },
        { $set: { title, cover } },
        { returnOriginal: false },
        (err, result) => {
          if (err) { res.status(500).json({ errors: { global: err } }); return; }
          res.json({ game: result.value });
        }
      );
    } else {
      res.status(400).json({ errors });
    }
  });

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it,"
      }
    })
  })
});

