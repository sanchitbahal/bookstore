var express = require('express');
var app = express();

app.get('/books', function(req, res) {
	res.send([
		{name: 'Book 1', image: 'monkey'}, 
		{name: 'Book 2', image: 'monkey'},
		{name: 'Book 3', image: 'monkey'},
		{name: 'Book 4', image: 'monkey'},
		{name: 'Book 5', image: 'monkey'}
		]);
});

app.listen(3000);
console.log('Listening on port 3000');