module.exports = ({ env }) => ({
  settings: {
    "users-permissions": {
      jwtSecret: env("JWT_SECRET", "nlcn-20"),
    },
  },
  seo: {
    enabled: true,
  },
  'drag-drop-content-types': {
    enabled: true,
  },
  'encryptable-field': {
    enabled: true,
  },
  'duplicate-button': {
    enabled: true,
  },
  'file-system': {
    enabled: true,
  },
  'prev-next-button': { 
    enabled: true,
  },
  "record-locking": {
    enabled: true,
    config: {
      transports: ["websocket"]
    }
  },
  redirects: {
    enabled: true,
  },
  scheduler: {
    enabled: true,
    config: {
      contentTypes: {
        'api::page.page': {}
      }
    }
  },
// {
//   translate: {
//     enabled: true,
//     config: {
//       // Add the name of your provider here (for example 'deepl' for strapi-provider-translate-deepl or the full package name)
//       provider: '[name]',
//       providerOptions: {
//         // Your provider might define some custom options like an apiKey
//       },
//       // Which field types are translated (default string, text, richtext, components and dynamiczones)
//       // Either string or object with type and format
//       // Possible formats: plain, markdown, html (default plain)
//       translatedFieldTypes: [
//         'string',
//         { type: 'text', format: 'plain' },
//         { type: 'richtext', format: 'markdown' },
//         'component',
//         'dynamiczone',
//       ],
//       // If relations should be translated (default true)
//       translateRelations: true,
//     },
//   },
// },
  "soft-delete": {
    enabled: true,
  },
  "strapi-paypal": {
    enabled: true,
    config: {
      sandbox: true, // 或者 false，根據你的環境來決定
      clientId: process.env.PAYPAL_CLIENT_ID, // PayPal 客戶端 ID，從環境變量中讀取
      clientSecret: process.env.PAYPAL_CLIENT_SECRET, // PayPal 客戶端密鑰，從環境變量中讀取
      returnUrl: 'http://localhost:1337/paypal/success', // 成功支付後返回的頁面 URL
      cancelUrl: 'http://localhost:1337/paypal/cancel', // 取消支付後返回的頁面 URL
      // 其他 PayPal 配置選項，例如 currency, intent, webhook 等
    },
  },
  email: {
    config: {
      provider: 'strapi-provider-email-smtp',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        secure: true, // true for 465, false for other ports
        username: env('SMTP_USER'),
        password: env('SMTP_PASS'),
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      defaultFrom: 'neil.cwn20@gmail.com',
      defaultReplyTo: 'neil.cwn20@gmail.com',
    },
  },
  ezforms:{
    config:{
      captchaProvider: {
        name: 'recaptcha',
        config: {
          secretKey: '6LdrJ_opAAAAALUYwqRIL-JNVCTzrJbRKaRT2nWR',
          minimumScore: 0.5
        }
      },
      notificationProviders: []
    }
  }
}); 
