/*eslint-env node */
var express = require('express');
var app = express();
//var port = process.env.port || 1337

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var port = process.env.port || appEnv.port;

app.get('/', function (req, res) {
    res.send('Hello World! -- its not very impressive, but it runs');
});


var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});