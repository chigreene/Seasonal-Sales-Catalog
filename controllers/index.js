
const router = require('express').Router();
const loginRoutes = require('./login-routes.js');
const seasonRoutes=require('./season-routes.js')

router.use('/login', loginRoutes);
router.use('/season',seasonRoutes)

module.exports = router;
