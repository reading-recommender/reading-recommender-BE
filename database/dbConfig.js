const knex = require('knex');
const knexConfig = require('../knexfile');

// use environment key
const dbEnv = process.env.DB_ENV || 'development';

modules.export = knex(knexConfig[dbEnv]);