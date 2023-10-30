const FallItem = require('../models/fallItem');
const FallReview = require('../models/fallReview');
const Reeses = require('../models/reeses');
const Skeleton = require('../models/skeleton')

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

        const reesesData = await Reeses.findAll();
        const reesesReviews = reesesData.map((reeses) => {
            return reeses.get({
                plain: true
            })
        })

        const skeletonData = await Skeleton.findAll();
        const skeletonReviews = skeletonData.map((skeleton) => {
            return skeleton.get({
                plain: true
            })
        })

        res.render('login', {
            items,
            reviews,
            reesesReviews,
            skeletonReviews,
            loggedIn: req.session.loggedIn,
        }); 
    } catch (err) {
        res.status(500).json(err)
    }
    
});

module.exports = router;
