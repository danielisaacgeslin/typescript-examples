import * as express from 'express';
import * as bodyParser from 'body-parser';

import { PORT } from './constants';
import { post, all } from './methods';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('', all);
app.post('/', post);

app.listen(PORT, () => console.log(`listening to port ${PORT}`));