// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    connection: {
      filename: './database/medCabinet.sqlite3'
    }
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_key = ON", done)
    }
  },

production: {
  client: "pg",
      connection: process.env.DATABASE_URL, // needed for deployment
      migrations: {
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./seeds",// test
  },
},
}

// Deployment

// 1) Create Heroku from GitHub
//
// 2) Add PG and create dataclip
//
// 3) Make sure all ENV are corect
//
// 4) go to console bash
//
// 5) in console npx knex rollback; latest ;seeds run; migrate all tables
//
// 6) Add Secret to Heroku


//connection: process.env.DATABASE_URL,

//const environment = process.env.NODE_ENV || 'development'; // needed for deployment
