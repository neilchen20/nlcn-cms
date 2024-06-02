// path: ./config/env/development/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL") || '');

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: host || env('DATABASE_HOST', 'ccba8a0vn4fb2p.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com'),
        port: port || env.int('DATABASE_PORT', 5432),
        database: database || env('DATABASE_NAME', 'd5bu9g4j39ngdb'),
        user: user || env('DATABASE_USERNAME', 'u1l7as8nc6sejs'),
        password: password || env('DATABASE_PASSWORD', 'p5de5d8b5c827ce34897c6db204c168f87e6a53e04152e69c73477d7de6c9b867'),
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};