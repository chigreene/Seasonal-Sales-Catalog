const FallItem = require('../models/fallItem');
const FallReview = require('../models/fallReview');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try { 
        const itemData = await FallItem.findAll()
        const items = itemData.map((item) => {
            return item.get({
                plain: true
            })
        })

        const reviewData = await FallReview.findAll()
        const reviews = reviewData.map((item) => {
            return item.get({
                plain: true
            })
        })

        res.render('login', {
            items,
            reviews,
            loggedIn: req.session.loggedIn,
        }); 
    } catch (err) {
        res.status(500).json(err)
    }
    
});

module.exports = router;
