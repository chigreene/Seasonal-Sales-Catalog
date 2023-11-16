const User = require("../models/user");
const Item = require("../models/item");
const Review = require("../models/review");
let currentSeason=require('../utils/seasonSwitch.js')


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
    return res.redirect("/login");
  } else {
    next();
  }
};



router.get('/login', async (req, res) => {
  //const currentDate = new Date();
  try {
    const itemData = await Item.findAll({
      where: {
        season: currentSeason.season,
      },
    });
    const items = itemData.map((item) => item.get({ plain: true }));

    res.render("login", {
      loggedIn: req.session.loggedIn,
      items,
      currentStylesheet:currentSeason.stylesheet
    });

    if (req.session.loggedIn) {
      res.redirect("/seasons");
    }
  } catch (err) {
    res.status(500).json("unable to fufill request");
  }
});

router.get("/login/recover", (req, res) => {
  try {
    res.status(200).render("loginRecover");
  } catch (err) {
    res.status(500).json("unable to fufill request");
  }
});

router.get("/seasons", checkLoginStatus, async (req, res) => {
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
    console.log(err);
    res.status(500).json(err);
  }
  if (!req.session.loggedIn) {
    res.redirect("/login");
  }
});

// route to get to review portal
router.get("/user", async (req, res) => {
  try {
    console.log(req.session.userId);
    const userIdData = await User.findOne({
      where: {
        id: req.session.userId,
      },
    });

    const user = userIdData.get({ plain: true });

    res
      .status(200)
      .render("userPortal", { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route to get users reviews
router.get("user/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const reviewData = await Review.findAll({
      where: {
        user_id: userId,
      },
      include: Item,
    });
    const reviews = reviewData.map((review) => review.get({ plain: true }));

    res
      .status(200)
      .render("userPortal", { reviews, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.update("/update/:id");

// ...

// route to get users reviews
router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const reviewData = await Review.findAll({
      where: {
        user_id: userId,
      },
      include: Item,
    });
    const reviews = reviewData.map((review) => review.get({ plain: true }));

    res
      .status(200)
      .render("userPortal", { reviews, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Move the catch-all route to the end
router.get("/seasons/:season", checkLoginStatus, async (req, res) => {
  try {
    const season = req.params.season;

    const itemData = await Item.findAll({
      where: {
        season: season,
      },
      include: [
        {
          model: Review,
          attributes: ["id", "username", "review", "createdAt"],
        },
      ],
    });

    const items = itemData.map((item) => item.get({ plain: true }));

    res.render("singleSeason", {
      items,
      season,
      sessionUsername: req.session.username,
    });

    console.log(req.session.username);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", checkLoginStatus, (req, res) => {
  try {
    res.redirect("/login");
  } catch (err) {
    res.status(404).json("Page not found");
  }
});

module.exports = router;
