var connection = require('./connections')

var orm = {
    selectAll: function(cb) {
        var queryString = 'SELECT * FROM burgers' 
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result)
        });
    },
    insertOne: function(burgerName, cb) {
        var queryString = 'INSERT INTO burgers (burger_name) VALUES(?)'
        connection.query(queryString, [burgerName], function(err, result) {
            if(err) {
                throw err;
            }
            cb(result)
        });
    },
    updateOne: function(eaten, id, cb) {
        var queryString = 'UPDATE burgers SET devoured = ? WHERE id = ?'
        connection.query(queryString, [eaten, id], function(err, result) {
            if(err) {
                throw err;
            }
            cb(result)
        });
    }
}

module.exports = orm;