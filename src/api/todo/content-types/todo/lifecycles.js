const axios = require('axios');

async function sendLineNotify(message, token) {
  console.log("Sending LINE Notify:", message);
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${token}`
  };
  const params = new URLSearchParams();
  params.append('message', message);

  try {
    const response = await axios.post("https://notify-api.line.me/api/notify", params, { headers });
    console.log("LINE Notify response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending LINE Notify:", error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: `${result.email}`,
        from: "neil.cwn20@gmail.com",
        subject: `${result.title}`,
        html: `<h3>${result.content}</h3>`,
      });

      await sendLineNotify(
        "小朋友可以接了！",
        "szUZDV10dA7FkIplHtcvAxz1n9eVpVUYxMO13zHbcxt"
      );

      console.log("Email sent and LINE Notify message sent successfully");
    } catch (err) {
      console.error("Error in afterCreate:", err);
    }
  },
};