const News = require("../utils/News.js");

const GetNews = (req, res) => {
  res.json(News);
};
module.exports = GetNews;