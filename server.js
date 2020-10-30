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


// app.get('/movedData.json', (req, res) => {

//     mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
//         .then(() => {
//                 console.log(`API listening at http://localhost:${port}`);
//                 console.log("Connected to Personal Budget Database");
//                 pbModel.find({})
//                     .then((data) => {
//                         res.json({"personal_budget": data});
//                     })
//                     .catch((ConnectionErr) => {
//                         console.log(ConnectionErr);

//                     })
//                 //mongoose.connection.close();
//             })
//             .catch((connectionErr) => {
//                 console.log(connectionErr);
//                // mongoose.connection.close();
//             })

// });

// app.get('/budget', (req,res) => {
//     res.json(movedData)
// });

// app.listen(port, () => {
//     console.log(`API listening at http://localhost:${port}`);
// });