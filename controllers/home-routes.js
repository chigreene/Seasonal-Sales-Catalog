const Item = require("../models/item");
const Review = require("../models/review");

const router = require("express").Router();

router.get('/login', (req, res) => {
  res.render('login', {
    loggedIn: req.session.loggedIn,
  });
  if (req.session.loggedIn) {
    res.redirect('/season')
  }
});


router.get('/season', async (req, res) => {
  try {
    const itemData = await Item.findAll({});
    const items = itemData.map((item) => {
      return item.get({
        plain: true,
      });
    });
    // getting pumpkin reviews from database and mapping individual reviews into correct format
    const reviewPumpkin = await Review.findAll({
      where: {
        item_id: 1,
      },
    });
    const reviewsPumpkin = reviewPumpkin.map((item) => {
      return item.get({
        plain: true,
      });
    });
    // getting Reeses reviews and mapping them in to correct format
    const reviewReeses = await Review.findAll({
      where: {
        item_id: 2,
      },
    });
    const reviewsReeses = reviewReeses.map((item) => {
      return item.get({
        plain: true,
      });
    });
    // getting skeleton reviews and mapping them into usable format
    const reviewSkeleton = await Review.findAll({
      where: {
        item_id: 3,
      },
    });
    const reviewsSkeleton = reviewSkeleton.map((item) => {
      return item.get({
        plain: true,
      });
    });

    // getting witches hat reviews and mapping them into usable format
    const reviewWitchesHat = await Review.findAll({
      where: {
        item_id: 4,
      },
    });
    const reviewsWitchesHat = reviewWitchesHat.map((item) => {
      return item.get({
        plain: true,
      });
    });

    res.render("seasons", {
      items,
      reviewsPumpkin,
      reviewsReeses,
      reviewsSkeleton,
      reviewsWitchesHat,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
  if (!req.session.loggedIn) {
    res.redirect('/login')
  }
});

router.get('*', (req, res) => {
  res.redirect('/login');
});

module.exports = router; 