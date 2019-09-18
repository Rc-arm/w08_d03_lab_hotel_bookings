const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const cors = require('cors');
app.use(cors());


app.use(parser.json());

MongoClient.connet('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('hotel');
    const bookingsCollection = db.collection('bookings');
  })
  .catch(console.error);


app.get('/', function (req, res) {
  res.json({message: 'App info goes here'});
});

app.listen(3000, function () {
  console.log(`Listening on post ${ this.address().port}`);
});
