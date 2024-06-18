module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins['email'].services.email.send({
        to: `${result.email}`,
        from: 'neil.cwn20@gmail.com',
        subject: `${result.title}`,
        html: `<h3>${result.content}</h3>`
      });
    } catch (err) {
      console.error(err);
    }
  },
};
