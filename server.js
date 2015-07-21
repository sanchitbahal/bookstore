var express = require('express');
var app = express();

app.get('/books', function(req, res) {
	res.send([{name: 'Book 1'}, {name: 'Book 2'}]);
});

app.listen(3000);
console.log('Listening on port 3000');