const Review = require("../models/review");
const Item = require("../models/item");
const User = require("../models/user");
const Favorite = require("../models/favorite");

const router = require("express").Router();

router.get("/", async (req, res) => {
    
    try {
        const userIdData = await User.findOne({
        where: {
          id: req.session.userId,
        },
      });
  
      const user = userIdData.get({ plain: true });
      const reviewData = await Review.findAll({
        where: {
          user_id: user.id,
        },
        include: Item,
      })

      const reviews = reviewData.map((review) => review.get({ plain: true }));

      const favoriteData = await Favorite.findAll({
        where: {
          user_id: user.id,
        },
        include: Item,
      })

      const favorites = favoriteData.map((favorite) => favorite.get({ plain: true }));

      if (user.id === req.session.userId) {
        user.selected = true;
      }

      res.status(200).render("userProfile", { user, favorites, reviews });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get("/:user_name", async (req, res)=>{
    try{
        const userData = await User.findOne({
            where: {
                user_name: req.params.user_name,
            },
        });

        const user = userData.get({ plain: true });

        const reviewData = await Review.findAll({
            where: {
                user_id: user.id,
              },
              include: Item,
        })

        const reviews = reviewData.map((review) => review.get({ plain: true }));

        const favoriteData = await Favorite.findAll({
            where: {
                user_id: user.id,
              },
              include: Item,
        })

        const favorites = favoriteData.map((favorite) => favorite.get({ plain: true }));

        if (user.id === req.session.userId){
            user.selected = true;
        }

        res.status(200).render("userProfile", { user, favorites, reviews });
    }catch{
        res.status(500).json(err);
    }
});

module.exports = router;