module.exports = {
    development: {
      client: 'pg',
      connection: {
        host:'localhost',
        user:'postgres',
        database:'postgres',
        password:'RJpolice',
        port:5432,
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: '../Migrations',
        client:'pg',
      },
    },
  }; 