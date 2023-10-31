const router = require("express").Router();
const { Review } = require("../../models");

// api/post
router.post("/:id", async (req, res) => {
  try {
    const userName = req.session.userName;

    const reviewData = await Review.create({
      userName: userName,
      review: req.body.review,
      item_id: req.params.id,
    });
    res.status(200).json(reviewData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
