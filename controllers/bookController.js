const db = require('../models');

module.exports = {
    findAll: function(req, res){
        db.Book.find(req.query).sort({ date: -1 })
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err))
    }
};