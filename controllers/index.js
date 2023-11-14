const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api");
// const userPortalRoutes = require("./userPortal-routes.js");
const profileRoutes = require("./profile-routes.js")

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
// router.use("/user", userPortalRoutes);
router.use("/u", profileRoutes);

module.exports = router;
