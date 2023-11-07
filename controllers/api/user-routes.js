const router = require("express").Router();
const { User } = require("../../models");
const { Op } = require('sequelize');
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      user_name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.username = dbUserData.user_name;
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
    console.log("hello world", req.session.loggedIn);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        [Op.or]: [
          { email: req.body.both },
          { user_name: req.body.both }
        ]
      }
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/recover', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        [Op.or]: [
          { email: req.body.both },
          { user_name: req.body.both }
        ]
      }
    });

    if (!dbUserData) {
      res.status(400).json({ message: 'User not found. Please check your email or username.' });
      return;
    }

    res.status(200).json({ recover: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/recover/password', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        [Op.or]: [
          { email: req.body.both },
          { user_name: req.body.both }
        ]
      }
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (validPassword) {
      res
        .status(500)
        .json({ message: 'Cannot use the current password' });
      return;
    }


    dbUserData.password = req.body.password;
    await dbUserData.save();

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
