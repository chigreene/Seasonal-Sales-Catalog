const router = require("express").Router();
const { Review } = require("../../models");

// api/post
router.post("/:id", async (req, res) => {
  try {
    console.log(req.session);
    const username = req.session.username;
    const reviewData = await Review.create({
      username: username,
      review: req.body.review,
      item_id: req.params.id,
      user_id: req.session.userId,
    });
    res.status(200).json(reviewData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
