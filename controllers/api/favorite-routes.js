const router = require("express").Router();
const { Favorite } = require("../../models");

// api/favorite
router.post("/:id", async (req, res) => {
  try {
    const reviewData = await Favorite.create({
        user_id: req.session.userId,
        item_id: req.params.id,
    });
    res.status(200).json(reviewData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;