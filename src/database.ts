import { Sequelize, Dialect } from 'sequelize';
import config from './config/config';

const { username, password, database, host, port, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect: dialect as Dialect,
  });
  
  export default sequelize;
  