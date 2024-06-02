module.exports = ({ env }) => ({
  settings: {
    "users-permissions": {
      jwtSecret: env("JWT_SECRET", "nlcn-20"),
    },
  },
});
