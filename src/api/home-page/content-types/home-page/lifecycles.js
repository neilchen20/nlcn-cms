module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins['email'].services.email.send({
        to: 'chenweining960227@gmail.com',
        from: 'admin@neilc.com',
        subject: '新内容已创建',
        text: `新内容已创建: ${result.hometitle}`,
      });
    } catch (err) {
      console.error(err);
    }
  },
};
