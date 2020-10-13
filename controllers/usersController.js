const db = require('../models');

module.exports = {
    userData: function (req, res) {
        db.User
            .findOne({ userName: req.params.userName })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    signUp: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
    }
}