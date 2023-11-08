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
});

router.get('/login/recover', (req, res) => {
  try {
    res.status(200).render('loginRecover')
  }
  catch (err) {
    res.status(500).json('unable to fufill request')
  }

});

router.get('/seasons', checkLoginStatus, async (req, res) => {
  try {
    const itemData = await Item.findAll({});
    const items = itemData.map((item) => item.get({ plain: true }));

    // if (!userIdData) {
    //   // handle the case where no user is found
    //   console.error("User not found");
    //   return res.status(404).json({ error: "User not found" });
    // }

    // if (!req.session.userId) {
    //   // handle the case where there is no user ID in the session
    //   console.error("No user ID in session");
    //   return res.status(401).json({ error: "No user logged in" });
    // }

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
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('*', checkLoginStatus, (req, res) => {
//   try {
//     res.redirect('/seasons');
//   } catch (err) {
//     res.status(404).json('Page not found');
//   }
// });


router.get('/', checkLoginStatus, (req, res) => {
  try {
    res.redirect('/seasons');
  } catch (err) {
    res.status(404).json('Page not found');
  }
});


module.exports = router;
