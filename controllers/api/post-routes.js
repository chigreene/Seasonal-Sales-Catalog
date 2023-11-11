const router = require("express").Router();
const { Review, Item, User } = require("../../models");

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

router.put("/update/:id", async (req, res) => {
  try {
    const reviewData = await Review.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    if (!reviewData) {
      res.status(404).json({
        message: "No review found for this id!"
      })
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
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
