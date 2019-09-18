const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
app.use(cors());


app.use(parser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connet('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('hotel');
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.error);


app.get('/', function (req, res) {
  res.json({message: 'App info goes here'});
});

app.listen(3000, function () {
  console.log(`Listening on post ${ this.address().port}`);
});
