const News = require("../utils/News.js");

const SportsData = (req, res) => {
  const sport = []
  News.forEach((news) => {
    if (news.category === "Sports") {
      sport.push(news);
    }
  });
  res.json(sport)
};
module.exports = SportsData;
