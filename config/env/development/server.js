module.exports = ({ env }) => ({
  proxy: true,
  url: "http://localhost:1337",
  host: "localhost",
  port: process.env.PORT,
  app: { 
    keys: env.array('APP_KEYS')
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
})
