var express = require('express');
var request = require('request');
var app = express();

app.get('/', function (req, res) {
	request({
		url: 'https://api.github.com/user', method: 'GET', json: true,
		headers: {
			'User-Agent': 'school',
			'Authorization': 'token 5e148e45c8c03dc92fc801e3da924bf88f9c58dd'
		}
	}, 
	function(error, response, body){
    	if(error) {
			console.log(error);
    	} else {
			res.json(body);
    	}
});
})

app.listen(3000, function(){
    console.log('working')
})