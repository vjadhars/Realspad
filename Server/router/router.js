const express = require("express");
const bodyParser = require("body-parser");

// import router
const {addPoints, getByAddress, getAllAddress} = require("../controller/userController")
const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.route("/addPoints").post(addPoints)
router.route("/getByAddress").get(getByAddress)
router.route("/getAllAddress").get(getAllAddress)


module.exports = router;