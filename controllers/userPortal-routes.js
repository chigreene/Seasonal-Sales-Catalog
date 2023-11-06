const Review = require("../models/review");
const Item = require("../models/item");
const User = require("../models/user");

const router = require("express").Router();

// route to get to review portal
router.get("/", async (req, res) => {
  try {
    console.log(req.session.userId);
    const userIdData = await User.findOne({
      where: {
        id: req.session.userId,
      },
    });

    const user = userIdData.get({ plain: true });

    res.status(200).render("userPortal", { user });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route to get users reviews
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

router.delete("/delete/:id", async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: "no review found for this id!" });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
