module.exports = ({ env }) => ({
  proxy: true,
  url: env("PUBLIC_URL", "http://localhost:1337"),
  host: "0.0.0.0",
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
