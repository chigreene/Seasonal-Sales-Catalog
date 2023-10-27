const router = require('express').Router();

// add parameter so it show the reason with route in url router.get('/:id'...
router.get('/', (req, res) => {
    res.render('seasons');
});

module.exports = router;
