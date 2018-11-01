var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: 'public' });
});

router.get('/map', function(req, res, next) {
    res.sendFile('map.html', { root: 'public' });
})

router.get('/powderline', function(req, res, next)
{
    var url = "http://api.powderlin.es/closest_stations?"
    url += "lat=" + req.query.lat;
    url += "&lng=" + req.query.lng;
    url += "&data=true&days=3&count=1";
    console.log(url);

    request(url).pipe(res);
    console.log("piped");
});



module.exports = router;