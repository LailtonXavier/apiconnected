import express from 'express';

import './database';

import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import contactRoutes from './routes/contactRoutes';

const whiteList = [
  'http://localhost:3000',
  'https://www.allconnected.tk',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/contact/', contactRoutes);
  }
}

export default new App().app;
