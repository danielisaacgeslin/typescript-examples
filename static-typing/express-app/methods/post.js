"use strict";
const mongodb = require("mongodb");
const constants_1 = require("../constants");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    mongodb.MongoClient.connect(constants_1.MONGO_URI, (err, db) => {
        const collection = db.collection(constants_1.MONGO_COLLECTION);
        collection.insert(req.body).then((success) => {
            console.log('data inserted');
            res.json(success);
            next();
        }, error => {
            console.error(error);
            next();
        });
    });
};
//# sourceMappingURL=post.js.map