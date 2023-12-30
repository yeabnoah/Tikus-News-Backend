const News = require("../utils/News.js");

const NewsData = (req, res) => {
  const id = req.params.id; // Access the id property from req.params
  News.forEach((news) => {
    if (news.id == id) {
      res.json(news);
    }
  });
};

module.exports = NewsData;