const router = require("express").Router();
const { Review } = require("../../models");

// api/post
router.post("/", async (req, res) => {
  try {
    const userName = req.session.userName;

    const reviewData = await Review.create({
      userName: userName,
      review: req.body.review,
    });
    res.status(200).json(reviewData);
  } catch (err) {
    console.log(err);
    res.status(200).json(err);
  }
});

module.exports = router;
