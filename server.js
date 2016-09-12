var express = require('express');
var app = express();

var port = process.env.PORT || 8080; // set our port
var router = express.Router();

var jGeoIP = require('jgeoip');
var geoip = new jGeoIP('data/GeoLite2-City.mmdb');

router.use(function(req, res, next) {
    console.log('Serving request: ' + req.originalUrl);
    next();
});

router.get('/locate', function(req, res) {
    var location = geoip.getRecord(req.query.ip);
    res.json(location);
});

app.use('/', router);

app.listen(port);
console.log('Listening on port ' + port);
