import * as express from 'express';
import * as mongodb from 'mongodb';

import { MONGO_URI, MONGO_COLLECTION } from '../constants';

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
    mongodb.MongoClient.connect(MONGO_URI, (err: mongodb.MongoError, db: mongodb.Db) => {
        const collection: mongodb.Collection = db.collection(MONGO_COLLECTION);
        collection.insert(req.body).then(
            (success: mongodb.InsertOneWriteOpResult) => {
                console.log('data inserted');
                res.json(success);
                next();
            },
            error => {
                console.error(error);
                next();
            }
        );
    });
}