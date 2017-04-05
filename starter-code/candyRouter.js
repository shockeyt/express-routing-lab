var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},
				{"id":2,"name":"Pez","color":"Green"},
				{"id":3,"name":"Marshmallow","color":"Pink"},
				{"id":4,"name":"Candy Stick","color":"Blue"}
			];
// var jsonParser = bodyParser.json()
// var stringCandy;
// stringCandy = JSON.stringify(candies);
//What would need to go into candies
//in order to pass our first test?

//index
router.get('/', function(req,res) {
	// What would go here? 
	// res.send("hello earth");
	// Hint: we want all candies in JSON format
	// bodyParser.json(candies);
	
	res.json(candies);
});

//show
router.get('/:id', function(req,res) {
	// What would go here? 
	// res.send("hello earth");
	// Hint: we want all candies in JSON format

	//req.body
	var idChange = req.params.id;
	res.json(candies[idChange-1]);
});

//create
router.post('/:id/edit', function(req,res) {
	// What would go here? 
	// res.send("hello earth");
	// Hint: we want all candies in JSON format
	res.json(candies.id);
});

//update
router.put('/:id', function(req,res) {
	// What would go here? 
	// res.send("hello earth");
	// Hint: we want all candies in JSON format
	res.json(candies.id);
});

//delete
router.delete('/:id', function(req,res) {
	// What would go here? 
	// res.send("hello earth");
	// Hint: we want all candies in JSON format
	res.json(candies.id);
});
// Fill out the rest of the routes here

module.exports = router;