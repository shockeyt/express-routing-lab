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
router.post('/', function(req,res) {

	candies.push(req.body);
	console.log(req.body);
	// var newCandy = {
	// 	"id": "id",
	// 	"name": "name",
	// 	"color": "color"
	// };
	res.end();
});

//update
router.put('/:id', function(req,res) {
	
	// var idChange = req.params.id;

	// var change = req.body;
	
	// res.json(candies[idChange-1]);
	candies.forEach(function(el, index) {
    	if (el.id == req.params.id) {
    	 	candies[index] = req.body;

    	}
    	
	});
	// candies.pop(candies[idChange-1]);
	console.log(req.body);

	// candies.push(change);

	res.end();
});

//delete
router.delete('/:id', function(req,res) {
	
	candies.forEach(function(el, index) {
    	if (el.id == req.params.id) {
    	 	candies.splice(index);
    	 	console.log(el);
    	 	console.log(index);
    	}
    	
	});
	res.end();
	
});
// Fill out the rest of the routes here

module.exports = router;