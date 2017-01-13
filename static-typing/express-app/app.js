"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const constants_1 = require("./constants");
const methods_1 = require("./methods");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.all('', methods_1.all);
app.post('/', methods_1.post);
app.listen(constants_1.PORT, () => console.log(`listening to port ${constants_1.PORT}`));
//# sourceMappingURL=app.js.map