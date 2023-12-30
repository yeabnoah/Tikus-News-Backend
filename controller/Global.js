const News = require("../utils/News.js");

const GlobalData = (req, res) => {
  const Global = []
  News.forEach((news) => {
    if (news.category === "World News / Global") {
      Global.push(news);
    }
  });
  res.json(Global)
};
module.exports = GlobalData;
