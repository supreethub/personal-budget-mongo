const express = require('express');
//const movedData = require('./movedData.json');
const mongoose = require("mongoose");
const pbModel = require('./RestAPIs/schema/mongo_schema');
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');

var url = 'mongodb://localhost:27017/personal_budget_db';

mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

var routes = require('./RestAPIs/routes/pbroutes');
routes(app);


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  app.listen(port);
  console.log('Personal Budget API running on: ' + port);

