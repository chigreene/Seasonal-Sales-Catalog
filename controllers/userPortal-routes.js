const Review = require("../models/review");
const Item = require("../models/item");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const reviewData = await Review.findAll({
      where: {
        user_id: userId,
      },
      include: Item,
    });
    const reviews = reviewData.map((review) => review.get({ plain: true }));

    res.status(200).render("userPortal", { reviews });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
