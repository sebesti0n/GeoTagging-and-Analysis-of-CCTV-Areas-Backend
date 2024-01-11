module.exports = {
    development: {
      client: 'pg',
      connection: {
      connectionString: 'postgres://rjpolicedb_user:Gs4qc0YpeTFhiehKWGHIcCf4ZexlvHsg@dpg-cmfdm97qd2ns73a1mk9g-a.oregon-postgres.render.com/rjpolicedb',
      ssl: { rejectUnauthorized: false }, 
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: '../Migrations',
        client:'pg',
      },
    },
  }; 