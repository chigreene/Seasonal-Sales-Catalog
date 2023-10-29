
const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const seasonRoutes=require('./season-routes.js')
const apiRoutes=require('./api')

router.use('/api',apiRoutes)
router.use('/', homeRoutes);
router.use('/season',seasonRoutes)

module.exports = router;
