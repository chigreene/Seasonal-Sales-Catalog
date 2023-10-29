const FallItem = require('../models/fall');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try { 
        const itemData = await FallItem.findAll()
        const items = itemData.map((item) => {
            return item.get({
                plain: true
            })
        })
        res.render('login', {
            items,
            loggedIn: req.session.loggedIn,
        }); 
    } catch (err) {
        res.status(500).json(err)
    }
    
});

module.exports = router;
