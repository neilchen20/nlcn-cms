module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "ws:", "wss:", "http:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
          ],
          "media-src": ["'self'", "data:", "blob:"],
          'frame-src':["'self'","https://neilc.me/"],
          'frame-ancestors':  null,
          upgradeInsecureRequests: null,
        },
      },
      frameguard:  false,
    },
  },
  'strapi::security',
  'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://neilc.me','https://www.neilc.me','https://admin.neilc.me','http://localhost:1337'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
// sss