const router = require("express").Router();
const { Favorite } = require("../../models");

// api/favorite
router.post("/:id", async (req, res) => {
  try {
    const favoriteData = await Favorite.create({
        user_id: req.session.userId,
        item_id: req.params.id,
    });
    res.status(200).json(favoriteData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/unfavorite/:id", async (req, res) => {
  try {
    const favoriteData = await Favorite.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!favoriteData) {
      res.status(404).json({ message: "no favorite found for this id!" });
      return;
    }

    res.status(200).json(favoriteData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;