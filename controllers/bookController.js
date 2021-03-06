const db = require('../models');
const axios = require('axios');

module.exports = {
    findAll: function(req, res){
        axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: req.query.title
            }
        })
        .then(function(response){
            console.log(response);
            res.json(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }
};