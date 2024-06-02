module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0",
  port: process.env.PORT,
  url: env('MY_HEROKU_URL','MY_ADMIN_URL','https://www.nlcn.me/project','https://www.nlcn.me/interest','https://nlcn.me/project','https://nlcn.me/interest'),
  app: { 
    keys: env.array('APP_KEYS')
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
})
