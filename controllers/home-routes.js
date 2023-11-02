const Item = require("../models/item");
const Review = require("../models/review");

const router = require("express").Router();

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

//Should this be a seperate router?
router.get('/season', checkLoginStatus, async (req, res) => {
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

});


router.get('*', checkLoginStatus, (req, res) => {
  try {
    res.redirect('/seasons');
  } catch (err) {
    res.status(404).json('Page not found');
  }
});


module.exports = router; 
