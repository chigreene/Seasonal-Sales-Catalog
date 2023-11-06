const User = require("../models/user");
const Item = require("../models/item");
const Review = require("../models/review");

const router = require("express").Router();

// Function to get reviews by item_id
async function getReviewsByItemId(itemId) {
  const reviewData = await Review.findAll({
    where: {
      item_id: itemId,
    },
  });
  return reviewData.map((review) => review.get({ plain: true }));
}

router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll({});
    const items = itemData.map((item) => item.get({ plain: true }));

    const userIdData = await User.findOne({
      where: {
        id: req.session.userId,
      },
    });

    const user = userIdData.get({ plain: true });

    console.log("user", user);

    // const userReviewData = Review.findAll({
    //   where: {
    //     user_id: req.session.userId,
    //   },
    // });
    // console.log(userReviewData);
    // const userReviews = userReviewData.map((review) =>
    //   review.get({ plain: true })
    // );

    // const userIdData = await User.findOne({
    //   where: {
    //     id: req.session.userId,
    //   },
    // });

    // const userId = userIdData.map((user) => user.get({ plain: true }));
    // console.log(userId);

    // Use Promise.all to fetch all reviews in parallel
    const [
      reviewsPumpkin,
      reviewsReeses,
      reviewsSkeleton,
      reviewsWitchesHat,
      reviewsDreidal,
      reviewsChristmasTree,
      reviewsDarthVadar,
      reviewsJuly4thHat,
    ] = await Promise.all([
      getReviewsByItemId(1),
      getReviewsByItemId(2),
      getReviewsByItemId(3),
      getReviewsByItemId(4),
      getReviewsByItemId(5),
      getReviewsByItemId(6),
      getReviewsByItemId(7),
      getReviewsByItemId(8),
    ]);

    res.render("home", {
      items,
      user,
      reviewsPumpkin,
      reviewsReeses,
      reviewsSkeleton,
      reviewsWitchesHat,
      reviewsDreidal,
      reviewsChristmasTree,
      reviewsDarthVadar,
      reviewsJuly4thHat,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
