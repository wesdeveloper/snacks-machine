import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import cardRoutes from './cards/cards-routes';

const app = express();

mongoose.connect('mongodb://localhost/test');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/cards', cardRoutes(express.Router()));

export default app;
