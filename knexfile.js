// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/usersDb.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './database/usersDb.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    }
  }
};
