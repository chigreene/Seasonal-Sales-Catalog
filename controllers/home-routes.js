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

// set up middleware
const checkLoginStatus = (req, res, next) => {
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }
  next();
};

//Should this be a seperate router?
router.get('/login', (req, res) => {
  try {
    res.render('login', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json('unable to fufill request')
  }

  router.get('/login/recover', (req, res) => {
    try {
      res.status(200).render('loginRecover')
    }
    catch (err) {
      res.status(500).json('unable to fufill request')
    }

  });

});
router.get("/seasons", async (req, res) => {
  try {
    const itemData = await Item.findAll({});
    const items = itemData.map((item) => item.get({ plain: true }));

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

    res.render("seasons", {
      items,
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

router.get('*', checkLoginStatus, (req, res) => {
  try {
    res.redirect('/seasons');
  } catch (err) {
    res.status(404).json('Page not found');
  }
});


module.exports = router;
