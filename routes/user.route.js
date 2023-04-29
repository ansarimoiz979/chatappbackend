const router = require("express").Router();
const User = require("../model/user.model")
const {
    registerUserCnt,
    loginToPortalCnt,
    userListCnt
} = require("../controller/user.controller")

router.post("/register", registerUserCnt)

router.post("/loginToPortal", loginToPortalCnt)


router.get("/userList", userListCnt )

module.exports = router