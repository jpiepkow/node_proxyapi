module.exports = function(app) {
var request = require('request');
    var jsonQuery = require('json-query')
	// server routes ===========================================================
    app.get('/',  function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({ message: 'hooray! welcome to our api!' });
    });

 app.get('/results',  function(req, res) {
        request('http://mock-api.smartermeasure.com/v4/results', function (err, response, body) {

            if (err) {
                console.log(err);
            } else {
                res.send(body);
            }
        });
    });

    app.get('/results/user/:id',  function(req, res) {
        var userid = req.params.id;
        console.log(userid)
        console.log('http://mock-api.smartermeasure.com/v4/users/' +userid)
        request('http://mock-api.smartermeasure.com/v4/users/' +userid, function (err, response, body) {

            if (err) {
                console.log(err);
            } else {

                res.send(JSON.parse(body));
            }

        });
    });



	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};