const Item = require("../models/item");
const Review = require("../models/review");

const router = require("express").Router();


router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll({});
    const items = itemData.map((item) => {
      return item.get({
        plain: true,
      });
    });

    const reviewPumpkin = await Review.findAll({
      where: {
        item_id: 1,
      },
    });
    const reviewsPumpkin = reviewPumpkin.map((item) => {
      return item.get({
        plain: true,
      });
    });

    res.render("login", {
      items,
      reviewsPumpkin,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
