// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/usersDb.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './database/usersDb.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
