import * as express from 'express';
import * as bodyParser from 'body-parser';
import { PORT } from './constants';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req: express.Request, res: express.Response) => {
    res.json(req.body);
});

app.listen(PORT, () => console.log(`listening to port ${PORT}`));