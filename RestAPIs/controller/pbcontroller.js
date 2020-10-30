'use strict';
var mongoose = require('mongoose'),
Personalbudget = mongoose.model('personal_budget');
exports.persbudget = function(req, res) {
  Personalbudget.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};
exports.add = function(req, res) {
  var new_expense = new Personalbudget(req.body);
  new_expense.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};
// exports.update = function(req, res) {
//   var pbTitle = mongoose.Types.ObjectId(req.query.title);
//   Personalbudget.findOneAndUpdate({_id: pbTitle}, req.body, {new: true}, function(err, data) {
//     if (err)
//       res.send(err);
//     res.json(data);
//   });
// };
// exports.delete = function(req, res) {
//   var pbTitle = mongoose.Types.ObjectId(req.query.title);
//   Product.remove({
//     _id: pbTitle
//   }, function(err, data) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Product successfully deleted' });
//   });
// };

