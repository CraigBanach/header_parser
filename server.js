'use strict';

var express = require('express');
var app = express();
var regex = new RegExp(/[()]/g);

app.get("/", function(req, res) {
    var IPReq = req.ip.split(":");
    var IP = IPReq[IPReq.length - 1];
    //console.log(req.useragent);
    var browserOS = req.headers['user-agent'].split(regex);
    res.end(JSON.stringify({
        "ipaddress": IP, 
        "language":req.acceptsLanguages()[0],
        "software": browserOS[1]
    }));
})

var port = process.env.PORT || 8080;
var server = app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});