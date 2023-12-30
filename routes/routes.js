const express = require("express");
const router = express.Router();
const GetNews = require("../controller/GetNews");
const NewsData = require("../controller/NewsData");
const SportsData = require("../controller/Sport.js")
const GlobalData = require("../controller/Global.js")

router.get("/feed", GetNews);
router.get("/feed/:id", NewsData);
router.get("/category/sport", SportsData)
router.get("/category/global", GlobalData)


module.exports = router;