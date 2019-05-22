const knex = require('knex');
const knexConfig = require('../knexfile');

// use environment key
const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(knexConfig[dbEnv]);