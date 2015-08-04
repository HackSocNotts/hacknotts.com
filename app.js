var express = require('express');
var port = process.env.PORT || 9000;
var app = express();

app.use(express.static(__dirname));

app.listen(port);
