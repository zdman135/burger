var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

router.get('/', function(req, res) {
    burger.selectAll(function(result) {
        res.render('index', {result});
    });
});

router.post('/api/burgers', function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json( { id: result.insertId });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    burger.updateOne(req.body.devoured, req.params.id, function(result) {
        res.json( { id: result });
    });
});

module.exports = router;
