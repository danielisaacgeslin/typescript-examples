"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var constants_1 = require("./constants");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/', function (req, res) {
    res.json(req.body);
});
app.listen(constants_1.PORT, function () { return console.log("listening to port " + constants_1.PORT); });
//# sourceMappingURL=app.js.map