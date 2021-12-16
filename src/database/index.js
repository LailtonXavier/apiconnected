import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

import Contact from '../models/Contact';

const models = [Contact];

const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
