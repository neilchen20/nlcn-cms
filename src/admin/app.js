// import AuthLogo from "./extensions/logo.ico";
// import AuthLogo from "./extensions/Quarter.png";
// import MenuLogo from "./extensions/quarter-symbol.png";

export default {
  config: {
    // head: {
    //   favicon: MenuLogo
    // },
    // auth: {
    //   logo: AuthLogo
    // },
    // menu: {
    //   logo: MenuLogo
    // },
    tutorials: false,
    notifications: {
      releases: false
    },
    locales: ['zh'],
    translations: {
      'zh': {
        "Auth.form.button.login.strapi": "透過 Strapi 登入",
        "Settings.application.strapi-version": "strapi 版本",
        "Settings.application.strapiVersion": "strapi 版本",
        "Auth.form.welcome.title": "歡迎使用 My Manager！",
        "Auth.form.welcome.subtitle": "登入您的 admin 帳號",
        "app.components.LeftMenu.navbrand.title": "My 控制台",
        "app.components.HomePage.welcome.again": "歡迎回來",
        "app.components.HomePage.welcomeBlock.content.again": "我們希望您在專案上有所進展！請隨時閱讀有關 Strapi 的最新消息。我們將根據您的回饋盡最大努力改進產品。",
        "app.components.HomePage.button.blog": "到部落格上閱讀更多",
        "app.components.HomePage.community": "探索開發社群",
        "app.components.HomePage.community.content": "在不同的社群中與其他成員、貢獻者以及開發者討論。",
        Users: 'neil.cwn20@gmail.com',
        City: 'Chinese(zh)',
        Id: '1',
      },
    },
    theme: {
      light: {
        colors: {
          primary100: '#c9ffeb',
          primary200: '#5effc3',
          primary500: '#00f298',
          buttonPrimary500: '#fff298',
          primary600: '#00bd77',
          buttonPrimary600: '#ffbd77',
          primary700: '#008755',
        }
      }
    }
  },
  bootstrap() {},
}