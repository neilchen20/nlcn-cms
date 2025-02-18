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
          "img-src": ["'self'", "data:", "blob:",],
          "media-src": ["'self'", "data:", "blob:"],
          'frame-src': ["'self'", "https://neilc.me/"],
          'frame-ancestors': null,
          upgradeInsecureRequests: null,
        },
      },
      frameguard: false,
    },
  },
  'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://neilc.me', 'https://www.neilc.me', 'https://admin.neilc.me', 'http://localhost:1337', 'http://localhost:5173'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    name: 'strapi::public',
    config: {
      path: '/data/public',  // 確保公開資源存儲到 Zeabur 的 Volume
      maxAge: 31536000,
    },
  },
  {
    name: 'strapi::upload',
    config: {
      providerOptions: {
        localServer: {
          folderPath: '/data/uploads',  // 設定上傳媒體的目錄
        },
      },
    },
  },
];