// path: ./config/env/development/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL") || '');

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: "localhost",
        port: 5432,
        database: "local-neilc-cms",
        user: "neilchen",
        password: "0093",
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};
