var express = require('express');
var app = express();

var port = process.env.PORT || 8080; // set our port
var router = express.Router();

router.use(function(req, res, next) {
    console.log('Request served: ' + req.originalUrl);
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({
        message: 'Hello world!'
    });
});

app.use('/locate', router);

app.listen(port);
console.log('Listening on port ' + port);
