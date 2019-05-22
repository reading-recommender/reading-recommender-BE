const knex = require('knex');
const knexConfig = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'development';

modules.export = knex(knexConfig[dbEnv]);