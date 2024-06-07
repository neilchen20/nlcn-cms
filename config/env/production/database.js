// path: ./config/env/development/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL") || '');
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: host || env('DATABASE_HOST', 'hnd1.clusters.zeabur.com'),
        port: port || env.int('DATABASE_PORT', 30199),
        database: database || env('DATABASE_NAME', 'zeabur'),
        user: user || env('DATABASE_USERNAME', 'root'),
        password: password || env('DATABASE_PASSWORD', '0JTXnv45tZV3wMWgAC9j1YNK8Fqe267o'),
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};