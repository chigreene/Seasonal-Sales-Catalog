const router = require("express").Router();
const { Pumpkin, Reeses, Skeleton } = require("../../models");

router.post('pumpkin', async (req, res) => {
    try {
        const userName = req.session.userName

        const reviewData = await Pumpkin.create({
            userName: userName,
            review: req.body.review,
            UserReference_id: req.params.id
        })
        res.status(200).json(reviewData)
    } catch (err) {
        console.log(err);
        res.status(200).json(err)
    }
})

module.exports = router;