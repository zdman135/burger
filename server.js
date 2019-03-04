var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

// or whichever directory you need to use
app.use(express.static("public"));

// app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exhbs = require('express-handlebars');

app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller');
app.use(routes);

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});