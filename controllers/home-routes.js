const Item = require("../models/item");
const Review = require("../models/review");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll();
    const items = itemData.map((item) => {
      return item.get({
        plain: true,
      });
    });

    const reviewData = await Review.findAll();
    const reviews = reviewData.map((item) => {
      return item.get({
        plain: true,
      });
    });

    res.render("login", {
      items,
      reviews,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
