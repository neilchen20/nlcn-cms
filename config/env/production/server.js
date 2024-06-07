module.exports = ({ env }) => ({
  proxy: true,
  url: "https://admin.neilc.me",
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
