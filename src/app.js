import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import cardRoutes from './cards/cards-routes';

dotenv.config();

const app = express();

let mongo_url;

switch(process.env.NODE_ENV) {
  case 'production': {
    mongo_url =  process.env.URL_MONGO_PRODUCTION;
    break;
  }
  case 'test': {
    mongo_url = process.env.URL_MONGO_TEST;
    break;
  }
  default: {
    mongo_url = process.env.URL_MONGO_DEVELOPMENT;
  }
}

mongoose.connect(mongo_url);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/cards', cardRoutes(express.Router()));

export default app;
