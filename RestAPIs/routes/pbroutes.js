'use strict';
module.exports = function(app) {
    var pbudget = require('../controller/pbcontroller');
    app.route('/persbudget')
        .get(pbudget.persbudget)
        .post(pbudget.add);
};